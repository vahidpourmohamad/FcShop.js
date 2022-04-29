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
import Promotionproductscmp from './Components/PromotionProducts/Promotionproductscmp';
import Blogpostlistcmp from './Components/BlogPostsListComponenet/Blogpostlistcmp';
import TestomonialCmp from './Components/TestomonialComponent/TestomonialCmp';
import FooterCmp from './Components/FooterComponent/FooterCmp';
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
      <AdvertismentCmp />
      <Promotionproductscmp BackgroundImage="/assets/Banners/Goldback.png" />
      <TestomonialCmp />
      <Blogpostlistcmp />
      <FooterCmp/>
    </Fragment>
  ); 
}

export default App;
