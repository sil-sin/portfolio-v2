'use client'

import { Spacer, Button } from '@nextui-org/react'
import { Snippet } from '@nextui-org/snippet'

import { TextData } from '@/actions/about'

export default function AboutComponent({ textData }: { textData: TextData }) {
  const { firstParagraph, secondParagraph, thirdParagraph, fourthParagraph } =
    textData

  const email = 'sinanajsilvi@gmail.com'

  return (
    <div className='p-2 max-w-4xl mx-auto'>
      <h1 className='text-4xl mb-4 text-center'>About Me</h1>
      <p
        dangerouslySetInnerHTML={{ __html: firstParagraph || '' }}
        className='text-lg mb-8 text-center'
      />
      <p
        dangerouslySetInnerHTML={{ __html: secondParagraph || '' }}
        className='text-lg mb-8 text-center'
      />
      <p
        dangerouslySetInnerHTML={{ __html: thirdParagraph || '' }}
        className='text-lg mb-8 text-center'
      />
      <p
        dangerouslySetInnerHTML={{ __html: fourthParagraph || '' }}
        className='text-lg mb-8 text-center'
      />{' '}
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
