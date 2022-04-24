import './App.css';
import BannerCmp from './Components/BanerComponent/BannerCmp';
import Slidercmp from './Components/SliderComponent/Slidercmp';
import MenuCmp from './Components/MenuComponent/MenuCmp';
import { Fragment } from 'react';
import CategorylistCmp from './Components/CategorylistComponent/CategorylistCmp';
import BgLogoParrallax from './Components/BgLogoParrallax/BgLogoParrallax';
import PopularProductListCom from './Components/PopularProductListComponent/PopularProductListCom';
import AboutCmp from './Components/AboutComponent/AboutCmp';
import SelectedProductListCmp from './Components/SelectedProductListComponent/SelectedProductListCmp';
import AdvertismentCmp from './Components/Advertisment/AdvertismentCmp';
function App() {
  return (
    <Fragment>
      <MenuCmp />
      <Slidercmp />
      <BgLogoParrallax />
      <CategorylistCmp />
      <PopularProductListCom />
      <AboutCmp />
      <SelectedProductListCmp />
      <AdvertismentCmp/>
    </Fragment>
  ); 
}

export default App;
