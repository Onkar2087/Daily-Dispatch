import React from 'react';

function NewsCardSm({ image, title, link }) {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer' className='mb-2'>
      <div className='w-[250px] h-[200px] relative hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden shadow-lg cursor-pointer'>
        {image && (
          <img src={image} alt={title} className='object-cover w-full h-full absolute top-0 left-0 z-0' />
        )}
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/30 to-black z-10'></div>
        <div className='relative z-20 flex flex-col items-center justify-end h-full p-3 text-white font-light'>
          <p className='text-sm text-center'>{title}</p>
        </div>
      </div>
    </a>
  );
}

export default NewsCardSm;
