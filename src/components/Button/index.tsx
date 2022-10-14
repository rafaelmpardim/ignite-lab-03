import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  children: ReactNode
  className?: string
}

export function Button({ asChild, children, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  
  return (
    <Comp
      className={
        clsx("bg-cyan-500 w-full px-4 py-3 rounded text-sm text-center text-black font-semibold font-sans transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
        className
      )}
      {...props}
    >
      { children }
    </Comp>
  )
}