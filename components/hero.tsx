import Background from './background'

export const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div className='inline-block max-w-lg text-center justify-center'>
        <h1 className='text-5xl font-bold'>
          Hi there I&apos;m <span className='text-primary'>Sil</span>
        </h1>
      </div>
      <Background />
    </div>
  )
}
