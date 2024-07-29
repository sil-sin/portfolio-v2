import { extendVariants, Chip } from '@nextui-org/react'

export const MyChip = extendVariants(Chip, {
  variants: {
    size: {
      sm: {
        dot: 'flex items-center justify-center px-1 min-w-8 h-6 text-tiny gap-1 rounded-full',
        base: 'flex items-center justify-center px-1 min-w-8 h-6 text-tiny gap-1 rounded-full',
        content:
          'flex items-center justify-center px-1 min-w-8 h-6 text-tiny gap-1 rounded-full',
        avatar:
          'flex items-center justify-center px-1 min-w-8 h-6 text-tiny gap-1 rounded-full',
        closeButton:
          'flex items-center justify-center px-1 min-w-8 h-6 text-tiny gap-1 rounded-full',
      },
      md: {
        dot: 'flex items-center justify-center px-4 min-w-20 h-10 text-small gap-2 rounded-full',
        base: 'flex items-center justify-center px-4 min-w-20 h-10 text-small gap-2 rounded-full',
        content:
          'flex items-center justify-center px-4 min-w-20 h-10 text-small gap-2 rounded-full',
        avatar:
          'flex items-center justify-center px-4 min-w-20 h-10 text-small gap-2 rounded-full',
        closeButton:
          'flex items-center justify-center px-4 min-w-20 h-10 text-small gap-2 rounded-full',
      },
      lg: {
        dot: 'flex items-center justify-center px-8 min-w-28 h-14 text-large gap-4 rounded-full',
        base: 'flex items-center justify-center px-8 min-w-28 h-14 text-large gap-4 rounded-full',
        content:
          'flex items-center justify-center px-8 min-w-28 h-14 text-large gap-4 rounded-full',
        avatar:
          'flex items-center justify-center px-8 min-w-28 h-14 text-large gap-4 rounded-full',
        closeButton:
          'flex items-center justify-center px-8 min-w-28 h-14 text-large gap-4 rounded-full',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})
