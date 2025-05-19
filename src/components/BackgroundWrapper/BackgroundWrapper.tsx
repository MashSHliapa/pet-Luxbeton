import { ReactNode } from 'react';
import './BackgroundWrapper.scss';

interface BackgroundWrapperProps {
  children: ReactNode;
  background: string;
  backgroundMobile?: string;
  theme: 'light' | 'dark';
}

export const BackgroundWrapper = (props: BackgroundWrapperProps) => {
  return (
    <div className="backgroundWrapper">
      <img src={props.background} alt="background" className="backgroundWrapper__bg background _ibg" />
      {props.backgroundMobile && (
        <img src={props.backgroundMobile} alt="background" className="backgroundWrapper__bg-mobile background _ibg" />
      )}
      {props.theme === 'dark' && <div className="backgroundWrapper__dark-overlay"></div>}
      {props.theme === 'light' && <div className="backgroundWrapper__light-overlay"></div>}
      <div className="content">{props.children}</div>
    </div>
  );
};
