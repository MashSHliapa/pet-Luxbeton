import { Title } from '../Title/Title';
import image1 from '../../assets/images/catalog1.png';
import image2 from '../../assets/images/catalog2.png';
import image3 from '../../assets/images/catalog3.png';
import image4 from '../../assets/images/catalog4.png';
import background from '../../assets/images/catalog_bg.png';
import './Catalog.scss';

export const Catalog = () => {
  return (
    <div className="catalog">
      <div className="catalog__container _container">
        <div className="catalog__body">
          <div className="catalog__title">
            <Title>каталог</Title>
          </div>

          <ul className="catalog__list">
            <li className="catalog__item">
              <div className="catalog__item">
                <div className="catalog__image">
                  <img src={image1} alt="image1" />
                </div>
                <h3 className="catalog__text">Барбекю-комплекс из бетона и полудрагаценного камня</h3>
              </div>
            </li>
            <li className="catalog__item">
              <div className="catalog__item">
                <div className="catalog__image">
                  <img src={image2} alt="image2" />
                </div>
                <h3 className="catalog__text">Барбекю-комплекс "Итальянские технологии"</h3>
              </div>
            </li>
            <li className="catalog__item">
              <div className="catalog__item">
                <div className="catalog__image">
                  <img src={image3} alt="image3" />
                </div>
                <h3 className="catalog__text">МАФ</h3>
              </div>
            </li>
            <li className="catalog__item">
              <div className="catalog__item">
                <div className="catalog__image">
                  <img src={image4} alt="image4" />
                </div>
                <h3 className="catalog__text">Плитка</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="catalog__bg background _ibg">
        <img src={background} alt="background" />
      </div>
    </div>
  );
};
