
import './App.css';
import React from 'react';

import { Link, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup';
import Home from './components/Home'


function App() {

  return (

    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>

    // <div className="App">
    //   <div id='product-container' className='container'>

    //     <CallService />

    //     <MainMenu />

    //     <SearchBar
    //       wishlist={wishlist}
    //       setWishlist={setWishlist}
    //       basket={basket}
    //       setBasket={setBasket}
    //     />

    //     <ToastContainer
    //       position="bottom-right"
    //       autoClose={5000}
    //       hideProgressBar={false}
    //       newestOnTop={false}
    //       closeOnClick
    //       rtl={false}
    //       pauseOnFocusLoss
    //       draggable
    //       pauseOnHover
    //       theme="light"
    //     />

    //     <AliceCarousel autoPlay autoPlayInterval="3000"
    //       disableButtonsControls
    //       mouseTracking
    //       infinite={true}
    //     >
    //       {bannerItems}
    //     </AliceCarousel>

    //     <div id='navbar'>
    //       <Link to={'/'}> Home</Link >
    //       <Link to={"/signup"}> Signup</Link>
    //     </div>
    //     <Routes>
    //       <Route path="/" element={<Home />}></Route>
    //       <Route path="/signup" element={<Signup />}></Route>
    //       <Route path="/*" element={<NotFound />}></Route>
    //     </Routes>

    //     <AliceCarousel autoPlay autoPlayInterval="3000"
    //       disableButtonsControls
    //     >
    //       <div className="product-cards-container">
    //         {categories}
    //       </div>
    //       <div className="product-cards-container">
    //         {categories2}
    //       </div>
    //     </AliceCarousel>


    //     <div className='container'>

    //       <div className="product-cards-container row btn-container d-flex justify-content-between mb-4 mt-5">
    //         <p className='col-3 header'>Popular products</p>
    //         <div className='col-7 d-flex justify-content-end'>
    //           <button type="button" className="category-btn btn btn-outline-light text-dark border mx-2">Cameras</button>
    //           <button type="button" className="category-btn btn btn-outline-light text-dark border mx-2">Laptops</button>
    //           <button type="button" className="category-btn btn btn-outline-light text-dark border mx-2">Tablets</button>
    //           <button type="button" className="category-btn btn btn-outline-light text-dark border">Mouse</button>
    //         </div>
    //       </div>


    //     </div>
    //     <AliceCarousel autoPlay autoPlayInterval="8000"
    //       disableButtonsControls  >
    //       <div className="product-cards-container">
    //         {products}
    //       </div>
    //       {/* <div className="product-cards-container">
    //         {products2}
    //       </div> */}
    //     </AliceCarousel>

    //     <Banner2 />

    //     <div className="product-cards-container part2">
    //       {productsPart2}
    //     </div>

    //     <div className="service mt-5 row">
    //       <div className='free-delivery-container col-12 col-md-4'>
    //         <img src="./image/content/box-tick.png" alt="" />
    //         <div className="free-delivery-text-container">
    //           <div className='free-delivery-txt'>
    //             Free delivery
    //           </div>
    //           <div className='free-delivery-txt-small'>
    //             on order above $50,00
    //           </div>
    //         </div>
    //       </div>

    //       <div className='best-quality-container col-12 col-md-4'>
    //         <img src="./image/content/crown.png" alt="" />
    //         <div className="best-quality-text-container">
    //           <div className='best-quality-txt'>
    //             Best quality
    //           </div>
    //           <div className='best-quality-txt-small'>
    //             best quality in low price
    //           </div>
    //         </div>
    //       </div>

    //       <div className='warranty-container col-12 col-md-4'>
    //         <img src="./image/content/shield-security.png" alt="" />
    //         <div className="warranty-text-container">
    //           <div className='warranty-txt'>
    //             1 year warranty
    //           </div>
    //           <div className='warranty-txt-small'>
    //             available warranty
    //           </div>
    //         </div>
    //       </div>

    //     </div>

    //   </div>


    // </div >
  );
}

export default App;