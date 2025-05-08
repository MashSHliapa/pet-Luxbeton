import { Title } from '../Title/Title';
import './Advantages.scss';

export const Advantages = () => {
  return (
    <div className="advantages">
      <div className="advantages__container _container">
        <div className="advantages__body">
          <div className="advantages__title text-black">
            <Title>
              Чем наши барбекю комплексы <span className="orange-color">лучше</span>
            </Title>
          </div>
          <ul className="advantages__list">
            <li className="advantages__item advantages__item_card1">
              <div className="advantages__content text-black">
                <h4 className="advantages__content-title">приготовление</h4>
                <p className="advantages__subtitle">
                  Для топки можно использовать угли и дрова, а также жарить на шампурах и различных решетках для рыбы и
                  мяса!
                </p>
              </div>
            </li>
            <li className="advantages__item advantages__item_card2">
              <div className="advantages__content text-white">
                <h4 className="advantages__content-title">Простота сборки</h4>
                <p className="advantages__subtitle">
                  Для сборки необходимо два взрослых человека (Папа, друг, сосед) и 15-20 минут на один модуль!
                  Собирается, как «Взрослое Лего» по системе Шип-Паз!
                </p>
              </div>
            </li>
            <li className="advantages__item advantages__item_card3">
              <div className="advantages__content text-black">
                <h4 className="advantages__content-title">Модульность</h4>
                <p className="advantages__subtitle">
                  Индивидуальные
                  <br /> варианты исполнения
                  <br /> Вашей зоны барбекю!
                </p>
              </div>
            </li>
            <li className="advantages__item advantages__item_card4">
              <div className="advantages__content text-black">
                <h4 className="advantages__content-title">Доставка по всей России</h4>
                <p className="advantages__subtitle">
                  Перед отправкой мы подбираем самый выгодный для Вас способ доставки, через транспортные компании!
                </p>
              </div>
            </li>
            <li className="advantages__item advantages__item_card5">
              <div className="advantages__content text-white">
                <h4 className="advantages__content-title">Состав</h4>
                <p className="advantages__subtitle">
                  80% это натуральные полудрагоценные
                  <br /> горные породы из Уральских гор 20%
                  <br /> жаропрочный бетон марки М600,
                  <br />
                  морозостойкость f300
                </p>
              </div>
            </li>
            <li className="advantages__item advantages__item_card6">
              <div className="advantages__content text-white">
                <h4 className="advantages__content-title">На большую семью</h4>
                <p className="advantages__subtitle">
                  Даже самый стандартный заказ
                  <br /> барбекю зоны, может полностью
                  <br /> накормить компанию из 10 человек
                  <br /> быстро и вкусно!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
