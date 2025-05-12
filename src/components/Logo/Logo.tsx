import favicon from '../../assets/icons/favicon.svg';
import './Logo.scss';

export const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__favicon">
        <img src={favicon} alt="favicon" />
      </div>
      <div className="logo__title">Luxbeton</div>
    </div>
  );
};
