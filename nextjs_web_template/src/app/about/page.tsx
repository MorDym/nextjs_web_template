import React from 'react'
import Accordion from '../components/Accordion'
import { accordionData } from '../data/data'

export default function about() {
  return (
           <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className='flex flex-col gap-1'>
        {accordionData.map((accord) => {
          const { id, title, content } = accord;
          return (
            <Accordion key={id} title={title} content={content} />
          );
        })}
      </div>
    </div>
  )
}
