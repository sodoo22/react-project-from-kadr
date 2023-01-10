
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
import ProductsPart2 from './components/ProductsPart2'
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
    if (index >= 8 && index < 16) {
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

  const productsPart2 = productsData.map((data, index) => {
    if (index == 16) {
      return (
        <ProductsPart2
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


  return (
    <div className="App">
      <div className='container'>

        <MainMenu />

        <AliceCarousel autoPlay autoPlayInterval="3000"
          disableButtonsControls
          mouseTracking
          infinite={true}
        >
          {bannerItems}
        </AliceCarousel>

        <AliceCarousel autoPlay autoPlayInterval="3000"
          disableButtonsControls
        >
          <div className="product-cards-container">
            {categories}
          </div>
          <div className="product-cards-container">
            {categories2}
          </div>
        </AliceCarousel>


        <div className='container'>

          <div className="product-cards-container row btn-container d-flex justify-content-between mb-4 mt-5">
            <p className='col-3 header'>Popular products</p>
            <div className='col-7 d-flex justify-content-end'>
              <button type="button" className="category-btn btn btn-outline-light text-dark border mx-2">Cameras</button>
              <button type="button" className="category-btn btn btn-outline-light text-dark border mx-2">Laptops</button>
              <button type="button" className="category-btn btn btn-outline-light text-dark border mx-2">Tablets</button>
              <button type="button" className="category-btn btn btn-outline-light text-dark border">Mouse</button>
            </div>
          </div>


        </div>
        <AliceCarousel autoPlay autoPlayInterval="8000"
          disableButtonsControls  >
          <div className="product-cards-container">
            {products}
          </div>
          <div className="product-cards-container">
            {products2}
          </div>
        </AliceCarousel>

        <Banner2 />

        <div className="product-cards-container part2">
          {productsPart2}
        </div>

        <div className="service mt-5 row">
          <div className='free-delivery-container col-12 col-md-4'>
            <img src="./image/content/box-tick.png" alt="" />
            <div className="free-delivery-text-container">
              <div className='free-delivery-txt'>
                Free delivery
              </div>
              <div className='free-delivery-txt-small'>
                on order above $50,00
              </div>
            </div>
          </div>

          <div className='best-quality-container col-12 col-md-4'>
            <img src="./image/content/crown.png" alt="" />
            <div className="best-quality-text-container">
              <div className='best-quality-txt'>
                Best quality
              </div>
              <div className='best-quality-txt-small'>
                best quality in low price
              </div>
            </div>
          </div>

          <div className='warranty-container col-12 col-md-4'>
            <img src="./image/content/shield-security.png" alt="" />
            <div className="warranty-text-container">
              <div className='warranty-txt'>
                1 year warranty
              </div>
              <div className='warranty-txt-small'>
                available warranty
              </div>
            </div>
          </div>


        </div>

      </div>
    </div >
  );
}

export default App;
