import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCardlg from './NewsCardlg';

function Headline() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getLatest = async () => {
      try {
        const response = await axios.get('https://content.guardianapis.com/search', {
          params: {
            'order-by': 'newest',
            'show-fields': 'thumbnail,trailText,byline',
            'page-size': 20,
            'api-key': import.meta.env.VITE_GUARDIAN_API,
          },
        });

        const articles = response.data.response.results;
        setData(articles);
      } catch (error) {
        console.error('Error fetching Guardian headlines:', error.message);
      }
    };

    getLatest();
  }, []);

  return (
    <div className='flex flex-wrap w-full items-center justify-center gap-7 mt-3'>
      {Array.isArray(data) && data.slice(0, 18).map((item, index) => (
        <NewsCardlg
          key={index}
          url={item.webUrl}
          title={item.webTitle}
          image={item.fields?.thumbnail}
          author={item.fields?.byline || 'Unknown'}
        />
      ))}
    </div>
  );
}

export default Headline;
