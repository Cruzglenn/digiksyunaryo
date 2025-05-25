import React from 'react'
import { cn } from '@/lib/utils'

interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const VisuallyHidden = React.forwardRef<
  HTMLSpanElement, 
  VisuallyHiddenProps
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: '0'
      }}
      className={cn(className)}
      {...props}
    />
  )
})

VisuallyHidden.displayName = 'VisuallyHidden'
