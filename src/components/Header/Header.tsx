import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Navbar } from '../Navbar/Navbar';
import favicon from '../../assets/icons/favicon.svg';
import whatsApp from '../../assets/icons/whatsApp.svg';
import telegram from '../../assets/icons/telegram.svg';
import phone from '../../assets/icons/phone.svg';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__body">
          <div className="header__logo logo">
            <div className="logo__favicon">
              <img src={favicon} alt="favicon" />
            </div>
            <div className="logo__title">Luxbeton</div>
          </div>
          <div className="header__burger-menu">
            <BurgerMenu />
          </div>
          <div className="header__navbar navbar">
            <Navbar />
          </div>
          <div className="header_contacts contacts">
            <div className="contacts__messangers">
              <div className="contacts__text">Мы онлайн, пишите</div>
              <div className="contacts__icons">
                <div className="contacts__icon icon">
                  <a href="#" target="_blank">
                    <img src={whatsApp} alt="whatsApp" />
                  </a>
                </div>
                <div className="contacts__icon icon">
                  <a href="#" target="_blank">
                    <img src={telegram} alt="whatsApp" />
                  </a>
                </div>
              </div>
            </div>
            <div className="contacts__phone">
              <div className="contacts__phone-icon">
                <img src={phone} alt="phone" />
              </div>
              <div className="contacts__phone-number">
                <a href="tel: +7 (351) 217-47-00">+7 (351) 217-47-00</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
