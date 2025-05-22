import { Logo } from '../Logo/Logo';
import { Messengers } from '../Messengers/Messengers';
import { Navbar } from '../Navbar/Navbar';
import { Phone } from '../Phone/Phone';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer__container _container">
        <div className="footer__body">
          <div className="footer__info">
            <div className="footer__logo">
              <Logo />
            </div>
            <div className="footer__navbar">
              <Navbar />
            </div>
            <div className="footer__messengers">
              <Messengers />
            </div>
            <div className="footer__opening-hours">
              <p className="footer__daytime">
                <b>Пн-пт</b> с 9.00 до 18.30
              </p>
              <p className="footer__daytime">
                <b>Сб-вс</b> с 9.00 до 17.30
              </p>
            </div>
            <div className="footer__phone">
              <Phone />
            </div>
          </div>
          <div className="footer__meta">
            <p className="footer__privacy-policy">Политика конфиденциальности</p>
            <p className="footer__copyright">Сделано VTOPESAIT</p>
            <p className="footer__agreement">Соглашение на обработку персональных данных</p>
          </div>
        </div>
      </div>
    </div>
  );
};
