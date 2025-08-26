import React from 'react'
import { NewsData } from '../data/data'
import NewBox from './ui/NewBox'

function News() {
  return (
    <div className='flex flex-col flex-wrap sm:flex-row gap-5 mt-5'>
        {NewsData.map((n) => {
            const { id, title, content, url, img, seznam } = n;
            return (<div key={id}><NewBox id={id} title={title} content={content} url={url} img={img} seznam={seznam} /></div>);
        })}
    </div>
  )
}

export default News