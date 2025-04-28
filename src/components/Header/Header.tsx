import favicon from '../../assets/icons/favicon.svg';
import whatsApp from '../../assets/icons/whatsApp.svg';
import telegram from '../../assets/icons/telegram.svg';
import phone from '../../assets/icons/phone.svg';
import burgerMenu from '../../assets/icons/burger-menu.svg';
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
            <img src={burgerMenu} alt="burger-menu" />
          </div>

          <div className="header__navbar navbar">
            <ul className="navbar__list">
              <li className="navbar__item">
                <a href="#" className="navbar__link">
                  Каталог
                </a>
              </li>

              <li className="navbar__item">
                <a href="#" className="navbar__link">
                  Фотогалерея
                </a>
              </li>

              <li className="navbar__item">
                <a href="#" className="navbar__link">
                  Акции
                </a>
              </li>

              <li className="navbar__item">
                <a href="#" className="navbar__link">
                  О компании
                </a>
              </li>

              <li className="navbar__item">
                <a href="#" className="navbar__link">
                  Проекты
                </a>
              </li>

              <li className="navbar__item">
                <a href="#" className="navbar__link">
                  Контакты
                </a>
              </li>
            </ul>
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
