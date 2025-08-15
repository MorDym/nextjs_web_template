// import React from 'react'
import type { ButtonProps } from '../../data/type'

function Button({children, ...props}: ButtonProps) {
  return (
    <button {...props} className='w-content p-2 bg-purple-200 hover:bg-purple-300'>
        {children}
    </button>
  )
}

export default Button