import { NextResponse } from 'next/server'
import { doc, getDoc } from 'firebase/firestore'

import { db } from '@/config/firebase'

let cachedData: any = null
let cacheTime = 0
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

export async function GET() {
  const collection = process.env.NEXT_PUBLIC_FIRESTORE_COLLECTION
  const documentId = process.env.NEXT_PUBLIC_FIRESTORE_DOCUMENTID

  if (!collection || !documentId) {
    return NextResponse.json(
      { error: 'Collection or Document ID not set in environment variables.' },
      { status: 400 }
    )
  }

  // Check if cache is valid
  if (cachedData && Date.now() - cacheTime < CACHE_DURATION) {
    console.log('Serving cached data')

    return NextResponse.json(cachedData, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    })
  }

  try {
    const docRef = doc(db, collection, documentId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const data = docSnap.data()

      // Update cache
      cachedData = data
      cacheTime = Date.now()

      const response = NextResponse.json(data, {
        headers: {
          'Cache-Control':
            'public, s-maxage=86400, stale-while-revalidate=43200',
        },
      })

      return response
    } else {
      return NextResponse.json({ error: 'No such document!' }, { status: 404 })
    }
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    )
  }
}

export const revalidate = 86400 // 24 hours in seconds
