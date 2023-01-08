
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


function App() {







  const images = carouselData.map(data => {
    return (
      <img src={data.url} className={data.style} />
    )
  })

  const categories = categoryData.map(data => {
    return (
      <Category
        title={data.title}
        imgUrl={data.imgUrl}
        items={data.items}
      />
    )
  })

  const products = productsData.map(data => {
    return (
      <Products
        title={data.title}
        imgUrl={data.imgUrl}
        price={data.price}
        rating={data.rating}
      />
    )
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


  return (
    <div className="App">
      <div className='container'>

        <MainMenu />

        <AliceCarousel autoPlay autoPlayInterval="3000">
          {bannerItems}
        </AliceCarousel>


        <AliceCarousel autoPlay autoPlayInterval="3000"
          responsive={{
            0: { items: 3 }
          }}>
          {categories}
        </AliceCarousel>


        <AliceCarousel autoPlay autoPlayInterval="3000"
          responsive={{
            0: {
              items: 4,
            },
            1024: {
              items: 8,
              itemsFit: 'fill',
            }

          }}>
          <div className="product-cards-container">
          {products}
          </div>
        </AliceCarousel>


        <br /><br /><br />
        <AliceCarousel autoPlay autoPlayInterval="3000">
          {images}
        </AliceCarousel>





      </div>
    </div >
  );
}

export default App;
