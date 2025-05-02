import icon1 from '../../assets/icons/main_icon1.svg';
import icon2 from '../../assets/icons/main_icon2.svg';
import icon3 from '../../assets/icons/main_icon3.svg';
import icon4 from '../../assets/icons/main_icon4.svg';
import { Title } from '../Title/Title';
import './Main.scss';

export const Main = () => {
  return (
    <div className="main">
      <div className="main__container _container">
        <div className="main__body">
          <div className="main__content-box">
            <div className="main__title">
              <Title>Модульный барбекю комплекс</Title>
            </div>
            <h2 className="main__subtitle">
              на основе натурального (полудрагоценного) камня от производителя за 14 дней с доставкой в любую{' '}
              <span className="note">точку РФ!</span>
            </h2>
            <ul className="main__list">
              <li className="main__item">
                <div className="main__icon">
                  <img src={icon1} alt="icon1" />
                </div>
                <div className="main__text">
                  Изготовлен из 80% <b>натурального камня</b> и 20% <b>жаропрочного бетона</b>
                </div>
              </li>
              <li className="main__item">
                <div className="main__icon">
                  <img src={icon2} alt="icon2" />
                </div>
                <div className="main__text">
                  Легко собрать самостоятельно <b>за 30 минут!</b>
                </div>
              </li>
              <li className="main__item">
                <div className="main__icon">
                  <img src={icon3} alt="icon3" />
                </div>
                <div className="main__text">
                  <b>В 3 раза дешевле</b> аналогичного комплекса из кирпича без потери качества
                </div>
              </li>
              <li className="main__item">
                <div className="main__icon">
                  <img src={icon4} alt="icon4" />
                </div>
                <div className="main__text">
                  <b>Гарантия</b> на все наши изделия - 1 год{' '}
                </div>
              </li>
            </ul>
            <div className="main__button-wraper">
              <a href="#" className="main__button button">
                РАСЧИТАТЬ СТОИМОСТЬ
              </a>
            </div>
          </div>
          <div className="main__background"></div>
        </div>
      </div>
    </div>
  );
};
