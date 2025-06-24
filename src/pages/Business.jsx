import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCardlg from '../Compnenets/Navbar/NewsCardlg';

const Business = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getLatest = async () => {
      try {
        const response = await axios.get('https://content.guardianapis.com/search', {
          params: {
            section: 'business',
            'order-by': 'newest',
            'show-fields': 'thumbnail,byline',
            'api-key': import.meta.env.VITE_GUARDIAN_API
          }
        });

        setData(response.data.response.results);
      } catch (error) {
        console.error("Error fetching business news:", error.message);
      }
    };

    getLatest();
  }, []);

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 md:px-10 pt-6 text-white">
      <h1 className="text-center text-3xl sm:text-4xl font-light mb-2 text-[#fc444a] uppercase">
        Business News
      </h1>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
        {data.map((item, index) => (
          <NewsCardlg
            key={index}
            url={item.webUrl}
            title={item.webTitle}
            image={item.fields?.thumbnail}
            author={item.fields?.byline}
          />
        ))}
      </div>
    </div>
  );
};

export default Business;
