import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Banner.css';

const Banner = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = 'https://api.furrl.in/api/v2/listing/getVibeByName';
    const payload = {
      name: '#HomeHunts',
    };

    try {
      const response = await axios.post(url, payload);
      setData(response.data.data.getVibeByName);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="banner-container mb-2">
      <div>
        {data && (
          <section>
            <div className="relative">
              <div className="image-container">
                <img className="banner-image" src={data.imageUrl} alt="" />
              </div>
              <div className="banner-text-container">
                <p className="banner-text">{data.name}</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Banner;
