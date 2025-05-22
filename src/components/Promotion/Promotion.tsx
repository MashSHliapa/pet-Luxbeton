import { Title } from '../Title/Title';
import imgPresent from '../../assets/images/present.png';
import './Promotion.scss';

export const Promotion = () => {
  return (
    <div className="promotion" id="promotion">
      <div className="promotion__container _container">
        <div className="promotion__body">
          <div className="promotion__content-box">
            <div className="promotion__title">
              <Title>
                <span className="orange-color">Акция!</span>
                <span className="title-lowercase">
                  <br /> при заказе комплекса <span className="note">барбекю -</span>{' '}
                  <span className="orange-color">ваза в цвет комплекса в подарок</span>
                </span>
              </Title>
              <div className="promotion__present-img">
                <img src={imgPresent} alt="" />
              </div>
            </div>
          </div>
          <div className="promotion__gallery"></div>
        </div>
      </div>
    </div>
  );
};
