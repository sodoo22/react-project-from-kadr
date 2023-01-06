
import './App.css';
import { Button } from 'react-bootstrap'
import MainMenu from './components/MainMenu';
import Banner from './components/Banner';
// import CategoryCards from './components/CategoryCards';
import AliceCarousel from 'react-alice-carousel'
import carouselData from './data/carousel';
import categoryData from './data/categories';
import Category from './components/Category';
import productsData from './data/products';
import Products from './components/Products';

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


  return (
    <div className="App">
      <div className='container'>

        <MainMenu />
        <Banner />
        <div className="category-cards-container">
          {categories}
        </div>

        <div className="product-cards-container">
          {products}
        </div>


        <br /><br /><br />
        <AliceCarousel autoPlay autoPlayInterval="3000">
          {images}
        </AliceCarousel>


      </div>
    </div>
  );
}

export default App;
