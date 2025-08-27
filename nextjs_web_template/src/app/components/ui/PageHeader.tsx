import { PageHeaderProps } from '@/app/data/type'
import React from 'react'

function PageHeader({title}: PageHeaderProps) {
  return (
    <h1 className='text-3xl'>{title}</h1>
  )
}

export default PageHeader