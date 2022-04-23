import './App.css';
import BannerCmp from './Components/BanerComponent/BannerCmp';
import Slidercmp from './Components/SliderComponent/Slidercmp';
import MenuCmp from './Components/MenuComponent/MenuCmp';
import { Fragment } from 'react';
import CategorylistCmp from './Components/CategorylistComponent/CategorylistCmp';
import BgLogoParrallax from './Components/BgLogoParrallax/BgLogoParrallax';
import PopularProductListCom from './Components/PopularProductListComponent/PopularProductListCom';
import AboutCmp from './Components/AboutComponent/AboutCmp';
function App() {
  return (
    <Fragment>
      <MenuCmp />
      <Slidercmp />
      <BgLogoParrallax />
      <CategorylistCmp />
      <PopularProductListCom />
      <AboutCmp/>
    </Fragment>
  ); 
}

export default App;
