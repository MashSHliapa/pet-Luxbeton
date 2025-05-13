import { Advantages } from '../Advantages/Advantages';
import { BackgroundWrapper } from '../BackgroundWrapper/BackgroundWrapper';
import { Catalog } from '../Catalog/Catalog';
import { Complexes } from '../Complexes/Complexes';
import { Design } from '../Design/Design';
import { Footer } from '../Footer/Footer';
import { Gallery } from '../Gallery/Gallery';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import './Layout.scss';

export const Layout = () => {
  return (
    <div className="layout">
      <BackgroundWrapper>
        <Header />
        <Main />
      </BackgroundWrapper>
      <Gallery />
      <Catalog />
      <Advantages />
      <Complexes />
      <Design />
      <Footer />
    </div>
  );
};
