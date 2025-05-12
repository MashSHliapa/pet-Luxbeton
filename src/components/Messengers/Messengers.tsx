import whatsApp from '../../assets/icons/whatsApp.svg';
import telegram from '../../assets/icons/telegram.svg';
import './Messengers.scss';

export const Messengers = () => {
  return (
    <div className="messengers">
      <p className="messengers__text dot-green">Мы онлайн, пишите</p>
      <div className="messengers__icons">
        <div className="messengers__icon icon">
          <a href="#" target="_blank">
            <img src={whatsApp} alt="whatsApp" />
          </a>
        </div>
        <div className="messengers__icon icon">
          <a href="#" target="_blank">
            <img src={telegram} alt="whatsApp" />
          </a>
        </div>
      </div>
    </div>
  );
};
