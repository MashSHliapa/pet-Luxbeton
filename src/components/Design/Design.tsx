import { Title } from '../Title/Title';
import './Design.scss';

export const Design = () => {
  return (
    <div className="design">
      <div className="design__container _container">
        <div className="design__body">
          <div className="design__content-box">
            <div className="design__title">
              <Title>
                Создай <span className="orange-color">уникальный дизайн</span> своего участка
              </Title>
            </div>
            <p className="design__text">Ответьте на вопросы и подберите себе модули барбекю комплекса индивидуально</p>
            <div className="design__button-wraper">
              <a href="#" className="design__button button">
                пройти тест
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
