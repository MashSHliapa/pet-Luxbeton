import { Logo } from '../Logo/Logo';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Navbar } from '../Navbar/Navbar';
import { Messengers } from '../Messengers/Messengers';
import { Phone } from '../Phone/Phone';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__body">
          <div className="header__logo">
            <Logo />
          </div>
          <div className="header__burger-menu">
            <BurgerMenu />
          </div>
          <div className="header__navbar navbar">
            <Navbar />
          </div>
          <div className="header__contacts">
            <div className="header__messengers">
              <Messengers />
            </div>
            <div className="header__phone">
              <Phone />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
