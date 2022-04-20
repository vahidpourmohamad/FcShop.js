import './App.css';
import BannerCmp from './Components/BanerComponent/BannerCmp';
import Slidercmp from './Components/SliderComponent/Slidercmp';
import MenuCmp from './Components/MenuComponent/MenuCmp';
import { Fragment } from 'react';
import CategorylistCmp from './Components/CategorylistComponent/CategorylistCmp';
function App() {
  return (
    <Fragment>
      <MenuCmp />
      <Slidercmp />
      <CategorylistCmp/>
    </Fragment>
  ); 
}

export default App;
