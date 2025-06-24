import React, { useEffect, useState } from 'react';
import Headline from '../Compnenets/Navbar/Headline';
import NewsCardSm from '../Compnenets/Navbar/NewsCardSm';
import requests from '../../requests'; // Ensure requests are updated for Guardian API
import axios from 'axios';

function Home() {
  const [data, setData] = useState({
    tech: [], business: [], politics: [], world: [],
    sports: [], entertainment: [], fashion: [], health: []
  });

  const fetchNews = async (key, request) => {
    try {
      const response = await axios.get(request);
      const articles = response?.data?.response?.results || [];
      setData(prev => ({ ...prev, [key]: articles }));
    } catch (error) {
      console.error(`Error fetching ${key} news:`, error.message);
    }
  };

  useEffect(() => {
    fetchNews('tech', requests.tech);
    fetchNews('business', requests.business);
    fetchNews('politics', requests.politics);
    fetchNews('world', requests.world);
    fetchNews('sports', requests.sports);
    fetchNews('entertainment', requests.entertainment);
    fetchNews('fashion', requests.fashion);
    fetchNews('health', requests.health);
  }, []);

  const renderSection = (title, articles) => (
    <section className="my-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center uppercase mb-6 text-[#fc444a]">
        {title}
      </h2>
      <div className="w-full overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide [scrollbar-width:none]">
        {Array.isArray(articles) &&
          articles.slice(0, 10).map((item, index) => (
            <div
              key={index}
              className="inline-block min-w-[250px] max-w-[300px] sm:min-w-[300px] md:min-w-[340px] "
            >
              <NewsCardSm
                image={item.fields?.thumbnail}
                title={item.webTitle}
                author={item.fields?.byline || "Unknown"}
                description={""}
                link={item.webUrl}
              />
            </div>
          ))}
      </div>
    </section>
  );

  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto">
      <div className="pt-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-2">
          Latest Headlines
        </h1>

        <div className="mb-10">
          <Headline />
        </div>

        {renderSection('Technology', data.tech)}
        {renderSection('Business', data.business)}
        {renderSection('Politics', data.politics)}
        {renderSection('World', data.world)}
        {renderSection('Sports', data.sports)}
        {renderSection('Entertainment', data.entertainment)}
        {renderSection('Fashion', data.fashion)}
        {renderSection('Health', data.health)}
      </div>
    </div>
  );
}

export default Home;
