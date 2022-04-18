import logo from './logo.svg';
import './App.css';
import BannerCmp from './Components/BanerComponent/BannerCmp';
import Slidercmp from './Components/SliderComponent/Slidercmp';
import MenuCmp from './Components/MenuComponent/MenuCmp';
import { Fragment } from 'react';
function App() {
  return (
    <Fragment>
      <MenuCmp />
      <Slidercmp />
    </Fragment>
  ); 
}

export default App;
