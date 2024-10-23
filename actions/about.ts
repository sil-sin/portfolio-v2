import { doc, getDoc } from 'firebase/firestore'

import { db } from '@/config/firebase'

export interface TextData {
  firstParagraph?: string
  secondParagraph?: string
  thirdParagraph?: string
  fourthParagraph?: string
}

export async function getAbout(): Promise<TextData> {
  const collection = process.env.NEXT_PUBLIC_FIRESTORE_COLLECTION
  const documentId = process.env.NEXT_PUBLIC_FIRESTORE_DOCUMENTID

  if (!collection || !documentId) {
    throw new Error(
      'Collection or Document ID not set in environment variables.'
    )
  }

  const docRef = doc(db, collection, documentId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const data = docSnap.data()

    return data
  }

  throw new Error('Document not found.')
}
