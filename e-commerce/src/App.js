
import './App.css';
import { Button } from 'react-bootstrap'
import MainMenu from './components/MainMenu';
import Banner from './components/Banner';
import CategoryCards from './components/CategoryCards';

function App() {
  return (
    <div className="App">
      <div className='menu-container'>
        <MainMenu />
        <Banner />
        <CategoryCards />
      </div>
    </div>
  );
}

export default App;
