import { FC } from 'react'
import { Chip } from '@nextui-org/react'

type Props = {
  icon: any
  techName: string
}
export const ProjectTechPill: FC<Props> = ({ icon: Icon, techName }) => {
  return (
    <div>
      <Chip
        color='warning'
        startContent={<Icon alt={techName} area-label={techName} size={16} />}
        variant='flat'
      >
        <small className='text-default-500 '>{techName}</small>
      </Chip>
    </div>
  )
}
