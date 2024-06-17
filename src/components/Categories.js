import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/Categories.css';

const Categories = ({ cat, handleCategoryChange, productCount }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = "https://api.furrl.in/api/v2/listing/getListingFilters";
    const payload = { id: "#HomeHunts", entity: "vibe" };

    try {
      const response = await axios.post(url, payload);
      setData(response.data.data.getListingFilters.easyFilters);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <div className="mb-4">
        <p className="text-description">{productCount} Products</p>
      </div>

      <div>
        {data.length > 0 && (
          <div className="categories-container">
            <button
              className={`category-button ${cat === "All" ? "active" : "inactive"}`}
              onClick={() => handleCategoryChange(null, "All", null)}
            >
              All
            </button>
            {data.map((category, index) => (
              <button
                key={index}
                className={`category-button ${cat === category.name ? "active" : "inactive"}`}
                onClick={() =>
                  handleCategoryChange(
                    category.contentType,
                    category.name,
                    category.uniqueId
                  )
                }
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
