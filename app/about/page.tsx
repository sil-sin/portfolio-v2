'use client'
import { Card, CardHeader, CardBody, Spacer, Button } from '@nextui-org/react'

export default function About() {
  return (
    <div className='p-2'>
      <h1 className='text-4xl mb-4 text-center'>About Me</h1>
      <p className='text-lg mb-8 text-center'>
        Hi, I&apos;m Silvi Sinanaj, a passionate and dedicated individual
        committed to delivering high-quality work.
      </p>
      <div className='flex flex-col items-center'>
        <Card className='mb-4 max-w-md'>
          <CardHeader>
            <h2 className='text-2xl mb-2'>My Mission</h2>
          </CardHeader>
          <CardBody>
            <p>
              My mission is to leverage my skills and knowledge to provide
              exceptional service and create meaningful experiences.
            </p>
          </CardBody>
        </Card>
        <Spacer y={1} />
        <Card className='mb-4 max-w-md'>
          <CardHeader>
            <h2 className='text-2xl mb-2'>My Vision</h2>
          </CardHeader>
          <CardBody>
            <p>
              My vision is to continuously grow and innovate, making a positive
              impact in my field and beyond.
            </p>
          </CardBody>
        </Card>
        <Spacer y={1} />
        <Card className='max-w-md'>
          <CardHeader>
            <h2 className='text-2xl mb-2'>My Values</h2>
          </CardHeader>
          <CardBody>
            <p>
              I value integrity, excellence, and perseverance. I believe in
              always striving for the best and being true to myself and others.
            </p>
          </CardBody>
        </Card>
        <Spacer y={2} />
        <a download href='/resume.pdf'>
          <Button color='primary'>Download Resume</Button>
        </a>
      </div>
    </div>
  )
}
