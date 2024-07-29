import { FC } from 'react'

import { MyChip } from '../myChip'

type Props = {
  icon: any
  techName: string
  variant?: 'bordered' | 'solid' | 'light' | 'flat' | 'faded' | 'shadow' | 'dot'
  size?: 'sm' | 'md' | 'lg'
  iconSize?: number
}
export const ProjectTechPill: FC<Props> = ({
  icon: Icon,
  techName,
  variant = 'dot',
  iconSize = 16,
  size = 'sm',
}) => {
  return (
    <div>
      <MyChip
        className={variant === 'faded' ? 'animate-fade-in' : ''}
        color='warning'
        size={size}
        startContent={
          <Icon alt={techName} area-label={techName} size={iconSize} />
        }
        variant={variant}
      >
        <small className='text-default-500 '>{techName}</small>
      </MyChip>
    </div>
  )
}
