import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface TextProps {
  asChild?: boolean
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Text({ asChild, children, className, size = 'md' }: TextProps) {
  const Comp = asChild ? Slot : 'span'
  
  return (
    <Comp
      className={
        clsx("text-gray-100 font-sans", 
          {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-md': size === 'lg',
          }, className
        )
      }
    >
      { children }
    </Comp>
  )
}