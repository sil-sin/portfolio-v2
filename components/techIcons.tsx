import { IconSvgProps } from '@/types'

export const Html5Icon: React.FC<IconSvgProps> = ({
  size = 48,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox='0 0 512 512'
      width={size || width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M71 460L30 0h451l-41 460-185 52' fill='#e34f26' />
      <path d='M256 472l149-41 35-394H256' fill='#ef652a' />
      <path
        d='M256 208h-75l-5-58h80V94H114l15 171h127zm-1 147l-63-17-4-45h-56l7 89 116 32z'
        fill='#ebebeb'
      />
      <path
        d='M255 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z'
        fill='#ffffff'
      />
    </svg>
  )
}
export const Css3Icon: React.FC<IconSvgProps> = ({
  size = 48,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-label='CSS3'
      height={size || height}
      role='img'
      viewBox='0 0 512 512'
      width={size || width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M72 460L30 0h451l-41 460-184 52' fill='#264de4' />
      <path d='M256 37V472l149-41 35-394' fill='#2965f1' />
      <path
        d='m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382'
        fill='#ebebeb'
      />
      <path
        d='m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z'
        fill='#ffffff'
      />
    </svg>
  )
}

export const JSIcon: React.FC<IconSvgProps> = ({
  size = 48,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox='0 0 512 512'
      width={size || width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect fill='#f7df1e' height='512' rx='15%' width='512' />
      <path d='M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z' />
    </svg>
  )
}


