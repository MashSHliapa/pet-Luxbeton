import phone from '../../assets/icons/phone.svg';
import './Phone.scss';

export const Phone = () => {
  return (
    <div className="phone">
      <div className="phone__icon">
        <img src={phone} alt="phone" />
      </div>
      <div className="phone__number">
        <a href="tel: +7 (351) 217-47-00">+7 (351) 217-47-00</a>
      </div>
    </div>
  );
};
