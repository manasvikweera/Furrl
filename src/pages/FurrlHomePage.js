import React , {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import SectionNav from '../components/SectionNav';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';


const FurrlHomePage = () => {

  const [category, setCategory] = useState('All');
  const [filter, setFilter] = useState([]);
  const [productCount, setProductCount] = useState(0);

  const handleCategoryChange = (contentType, name, uniqueId) => {
    if(category === name) return;
    setCategory(name);
    name !== 'All' ? setFilter([{ id: uniqueId, type: contentType }]) : setFilter([]);
  };

  return (
    <>
    <Navbar/>
    <div className='mb-2'>
      <Banner/>
    </div>

    <div className='mx-2'>
      <SectionNav/>
    </div>

    <div className='mx-2 my-4'>
      <Categories cat={category} handleCategoryChange={handleCategoryChange} productCount={productCount}/>
    </div>

    <div className='mx-1'>
      <ProductList filter={filter} setProductCount={setProductCount}/>
    </div>
    </>
  )
}

export default FurrlHomePage