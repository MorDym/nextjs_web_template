// import React from 'react'
import type { ButtonProps } from '../../data/type'

function Button({children, className, ...props}: ButtonProps) {
  return (
    <button {...props} className={className || 'w-content p-2 bg-purple-200 hover:bg-purple-300'}>
        {children}
    </button>
  )
}

export default Button