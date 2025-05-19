import { Advantages } from '../Advantages/Advantages';
import { BackgroundWrapper } from '../BackgroundWrapper/BackgroundWrapper';
import { Catalog } from '../Catalog/Catalog';
import { Complexes } from '../Complexes/Complexes';
import { Design } from '../Design/Design';
import { Footer } from '../Footer/Footer';
import { Gallery } from '../Gallery/Gallery';
import { Header } from '../Header/Header';
import { HowWeWork } from '../HowWeWork/HowWeWork';
import { Main } from '../Main/Main';
import { Promotion } from '../Promotion/Promotion';
import backgroundMain from '../../assets/images/main_bg.png';
import backgroundMobileMain from '../../assets/images/main_bg_mobile.png';
import backgroundAdv from '../../assets/images/advantages_bg_top.png';
import './Layout.scss';

export const Layout = () => {
  return (
    <div className="layout">
      <BackgroundWrapper background={backgroundMain} backgroundMobile={backgroundMobileMain} theme={'dark'}>
        <Header />
        <Main />
      </BackgroundWrapper>
      <Gallery />
      <Catalog />
      <BackgroundWrapper background={backgroundAdv} theme={'light'}>
        <Advantages />
        <Complexes />
        <Design />
      </BackgroundWrapper>
      <HowWeWork />
      <Promotion />
      <Footer />
    </div>
  );
};
