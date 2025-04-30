import background from '../../assets/images/main_bg.png';
import backgroundMobile from '../../assets/images/main_bg_mobile.png';
import './BackgroundWrapper.scss';

export const BackgroundWrapper = (props: { children }) => {
  return (
    <div className="backgroundWrapper">
      <img src={background} alt="background" className="backgroundWrapper__bg background _ibg" />
      <img src={backgroundMobile} alt="background" className="backgroundWrapper__bg-mobile background _ibg" />
      <div className="content">{props.children}</div>
    </div>
  );
};
