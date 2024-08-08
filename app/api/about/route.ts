import { NextResponse } from 'next/server'
import { doc, getDoc } from 'firebase/firestore'

import { db } from '@/config/firebase'

export async function GET() {
  const collection = process.env.NEXT_PUBLIC_FIRESTORE_COLLECTION
  const documentId = process.env.NEXT_PUBLIC_FIRESTORE_DOCUMENTID

  if (!collection || !documentId) {
    return NextResponse.json(
      { error: 'Collection or Document ID not set in environment variables.' },
      { status: 400 }
    )
  }

  try {
    const docRef = doc(db, collection, documentId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return NextResponse.json(docSnap.data())
    } else {
      return NextResponse.json({ error: 'No such document!' }, { status: 404 })
    }
  } catch (error) {
    console.log('Firestore error:', error)

    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    )
  }
}
