import image1 from '../../assets/images/gallery1.png';
import image2 from '../../assets/images/gallery2.png';
import image3 from '../../assets/images/gallery3.png';
import image4 from '../../assets/images/gallery4.png';
import './Gallery.scss';

export const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
      <div className="gallery__container _container">
        <ul className="gallery__list">
          <li className="gallery__item">
            <img src={image1} className="gallery__image" alt="image1" />
            <h3 className="gallery__text">
              Соберите свою <span className="gallery__text-orange">идеальную зону барбекю</span> из наших модулей
            </h3>
          </li>
          <li className="gallery__item">
            <img src={image2} className="gallery__image" alt="image2" />
            <h3 className="gallery__text">
              Не нужен отдельный фундамент, <span className="gallery__text-orange">достаточно ровной площадки</span>
            </h3>
          </li>
          <li className="gallery__item">
            <img src={image3} className="gallery__image" alt="image3" />
            <h3 className="gallery__text">
              <span className="gallery__text-orange">Стильные и экологичные</span> печи-барбекю
            </h3>
          </li>
          <li className="gallery__item">
            <img src={image4} className="gallery__image" alt="image4" />
            <h3 className="gallery__text">
              <span className="gallery__text-orange">Морозостойки</span> - проверено Сибиряками
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
};
