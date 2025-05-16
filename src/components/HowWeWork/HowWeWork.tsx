import { Title } from '../Title/Title';
import background from '../../assets/images/howWeWork_bg.png';
import './HowWeWork.scss';
export const HowWeWork = () => {
  return (
    <div className="how-wep-work">
      <div className="how-wep-work__container _container">
        <div className="how-wep-work__body">
          <div className="how-wep-work__title">
            <Title>КАК МЫ РАБОТАЕМ</Title>
          </div>
          <div className="how-wep-work__subtitle">
            Уже через <span className="orange-color">14 дней</span> барбекю комплекс будет у Вас с инструкцией по сборке
            и <span className="orange-color">приятным бонусом</span>
          </div>
          <ul className="how-wep-work__list">
            <li className="how-wep-work__item1">
              <div className="how-wep-work__number">1</div>
              <p className="how-wep-work__text text-black">
                Вы <b>оставляете</b> заявку на нашем сайте или звоните менеджеру
              </p>
            </li>
            <li className="how-wep-work__item2">
              <div className="how-wep-work__number">2</div>
              <p className="how-wep-work__text text-black">
                Делаем <b>расчет цены</b> и совместимости под ваши условия
              </p>
            </li>
            <li className="how-wep-work__item3">
              <div className="how-wep-work__number">3</div>
              <p className="how-wep-work__text text-black">
                Заключаем <b>договор</b> (предоплата от 50%)
              </p>
            </li>
            <li className="how-wep-work__item4">
              <div className="how-wep-work__number">4</div>
              <p className="how-wep-work__text text-black">
                <b>Изготавливаем</b> в течение 10-15 рабочих дней
              </p>
            </li>
            <li className="how-wep-work__item5">
              <div className="how-wep-work__number">5</div>
              <p className="how-wep-work__text text-black">
                Оповещаем Вас о готовности и согласовываем с Вами <b>отправку изделий</b>
              </p>
            </li>
            <li className="how-wep-work__item6">
              <div className="how-wep-work__number">6</div>
              <p className="how-wep-work__text text-black">
                Получаете изделия и <b>наслаждайтесь вкусной и полезной едой</b>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="how-wep-work__background background _ibg">
        <img src={background} alt="background" />
      </div>
    </div>
  );
};
