'use client'

import { Spacer, Button, Skeleton } from '@nextui-org/react'
import { Snippet } from '@nextui-org/snippet'
import { useState, useEffect } from 'react'

interface TextData {
  firstParagraph?: string
  secondParagraph?: string
  thirdParagraph?: string
  fourthParagraph?: string
}

export default function About() {
  const [textData, setTextData] = useState<TextData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFirestoreData = async () => {
      try {
        const response = await fetch('/api/about')

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()

        setTextData(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFirestoreData()
  }, [])

  const email = 'sinanajsilvi@gmail.com'

  const renderParagraph = (content: string | undefined, index: number) =>
    isLoading ? (
      <Skeleton key={index} className='max-w-4xl w-full h-40 rounded-lg mb-8' />
    ) : (
      <p
        dangerouslySetInnerHTML={{ __html: content || '' }}
        key={index}
        className='text-lg mb-8 text-center'
      />
    )

  return (
    <div className='p-2 max-w-4xl mx-auto'>
      <h1 className='text-4xl mb-4 text-center'>About Me</h1>
      {renderParagraph(textData?.firstParagraph, 1)}
      {renderParagraph(textData?.secondParagraph, 2)}
      {renderParagraph(textData?.thirdParagraph, 3)}
      {renderParagraph(textData?.fourthParagraph, 4)}
      <div className='flex flex-col items-center'>
        <p className='text-lg'>
          Feel free to contact me and/or download my resume
        </p>
        <Spacer y={2} />
        <div className='flex items-center justify-between'>
          <Snippet>{email}</Snippet>
        </div>
        <Spacer y={2} />
        <a download href='/Silvi_Sinanaj_SE_Resume.pdf'>
          <Button color='primary'>Download Resume</Button>
        </a>
      </div>
    </div>
  )
}
