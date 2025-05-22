import Slider from 'react-slick';
import { sliderSettings } from './sliderSettings';
import { Title } from '../Title/Title';
import image from '../../assets/images/complex.png';
import './Complexes.scss';

export const Complexes = () => {
  return (
    <div className="complexes" id="complexes">
      <div className="complexes__container">
        <div className="complexes__body">
          <div className="complexes__title">
            <Title>готовые комплексы барбекю</Title>
          </div>
          <div className="complexes__slider slider">
            <Slider {...sliderSettings} appendDots={(dots) => <div className="slick-dots">{dots}</div>}>
              <div className="slider__item">
                <img src={image} alt="image" />
              </div>
              <div className="slider__item">
                <img src={image} alt="image" />
              </div>
              <div className="slider__item">
                <img src={image} alt="image" />
              </div>
              <div className="slider__item">
                <img src={image} alt="image" />
              </div>
              <div className="slider__item">
                <img src={image} alt="image" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
