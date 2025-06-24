import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

function NewsCardlg({ title, image, description, author, url }) {
  return (
    <div className='md:w-[990px] w-[400px] h-auto sm:h-[250px] flex flex-col sm:flex-row gap-4 items-start justify-start border border-gray-200 shadow-md my-4 rounded-lg overflow-hidden transition-shadow hover:shadow-lg cursor-pointer'>
      {image && (
        <img src={image} alt={title} className='sm:w-[250px] w-full h-[200px] sm:h-full object-cover' />
      )}
      <div className='p-4 flex flex-col justify-between'>
        <h1 className='text-xl font-semibold text-gray-800 mb-2'>{title}</h1>
        {description && <p className='text-sm text-gray-600 mb-2' dangerouslySetInnerHTML={{ __html: description }} />}
        {author && <p className='text-sm text-gray-500 mb-3'>By {author}</p>}
        {url && (
          <a href={url} target='_blank' rel='noopener noreferrer' className='text-sm text-[#fc444a] font-medium flex items-center gap-1 hover:underline'>
            Read More <AiOutlineArrowRight />
          </a>
        )}
      </div>
    </div>
  );
}

export default NewsCardlg;
