import React from 'react'
import Accordion from '../components/Accordion'
import { accordionData } from '../data/data'
import BasicContent from '../components/BasicContent';
import { basicContentData } from '../data/data';

export default function about() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className='flex flex-col sm:flex-row gap-5'>
        {basicContentData.map((item) => {
          const { id, title, content, img, seznam } = item;
          return (
            <BasicContent key={id} id={id} title={title} content={content} img={img} seznam={seznam} />
          );
        })}
      </div>
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
