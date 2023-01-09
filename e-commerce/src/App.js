
import './App.css';
import MainMenu from './components/MainMenu';
import Banner from './components/Banner';
import AliceCarousel from 'react-alice-carousel'
import carouselData from './data/carousel';
import categoryData from './data/categories';
import productsData from './data/products';
import bannerData from './data/banner-items'

import Category from './components/Category';
import Products from './components/Products';
import React from 'react';
import Banner2 from './components/Banner2';


function App() {

  const images = carouselData.map(data => {
    return (
      <img src={data.url} className={data.style} />
    )
  })

  const categories = categoryData.map((data, index) => {
    if (index < 3) {
      return (
        <Category
          title={data.title}
          imgUrl={data.imgUrl}
          items={data.items}
        />
      )
    }
  })

  const categories2 = categoryData.map((data, index) => {
    if (index >= 3) {
      return (
        <Category
          title={data.title}
          imgUrl={data.imgUrl}
          items={data.items}
        />
      )
    }
  })

  const products = productsData.map((data, index) => {
    if (index < 8) {
      return (
        <Products
          id={data.id}
          title={data.title}
          imgUrl={data.imgUrl}
          price={data.price}
          rating={data.rating}
        />
      )
    }
  })

  const products2 = productsData.map((data, index) => {
    if (index >= 8) {
      return (
        <Products
          id={data.id}
          title={data.title}
          imgUrl={data.imgUrl}
          price={data.price}
          rating={data.rating}
        />
      )
    }
  })

  const bannerItems = bannerData.map(data => {
    return (
      <Banner
        title={data.title}
        imgUrl={data.imgUrl}
        price={data.price}
        shortMessage={data.shortMessage}
        description={data.description}
      />
    )
  })


  console.log(products);
  console.log(products2);


  return (
    <div className="App">
      <div className='container'>

        <MainMenu />

        <AliceCarousel autoPlay autoPlayInterval="3000">
          {bannerItems}
        </AliceCarousel>

        <AliceCarousel autoPlay autoPlayInterval="3000"

        >
          <div className="product-cards-container">
            {categories}
          </div>
          <div className="product-cards-container">
            {categories2}
          </div>
        </AliceCarousel>


        <div className='container'>
          <p>Popular products</p>
          <div>
            <button type="button" className="btn btn-outline-light text-dark border">View More</button>
          </div>
        </div>
        <AliceCarousel autoPlay autoPlayInterval="8000">
          <div className="product-cards-container">
            {products}
          </div>
          <div className="product-cards-container">
            {products2}
          </div>
        </AliceCarousel>




        <Banner2 />



      </div>
    </div >
  );
}

export default App;
