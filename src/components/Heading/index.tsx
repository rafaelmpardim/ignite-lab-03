import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface HeadingProps {
  asChild: boolean
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Heading({ asChild, children, className, size = 'md' }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'
  return (
    <Comp
      className={
        clsx("text-gray-100 font-bold font-sans", 
          {
            'text-lg': size === 'sm',
            'text-xl': size === 'md',
            'text-2xl': size === 'lg',
          }, className
        )
      }
    >
      { children }
    </Comp>
  )
}