import { BackgroundWrapper } from '../BackgroundWrapper/BackgroundWrapper';
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
    </div>
  );
};
