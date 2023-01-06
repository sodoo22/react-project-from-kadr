
import './App.css';
import { Button } from 'react-bootstrap'
import MainMenu from './components/MainMenu';
import Banner from './components/Banner';
// import CategoryCards from './components/CategoryCards';
import AliceCarousel from 'react-alice-carousel'
import carouselData from './data/carousel';
import categoryData from './data/categories';
import Category from './components/Category';

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


  return (
    <div className="App">
      <div className='menu-container'>


        <MainMenu />
        <Banner />
        <div className="category-cards-container">{categories}</div>


        <AliceCarousel autoPlay autoPlayInterval="3000">
          {images}
        </AliceCarousel>



      </div>
    </div>
  );
}

export default App;
