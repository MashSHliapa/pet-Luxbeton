import { useEffect, useRef, useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import './BurgerMenu.scss';

export const BurgerMenu = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false); // Меню в DOM и видимо ли
  const [animationClass, setAnimationClass] = useState('');
  const timeoutRef = useRef<number | null>(null);

  function handleClickOpenNavbar() {
    setIsOpenNavbar(true);
    setAnimationClass('animating-in');
    document.body.style.overflow = 'hidden';

    const burgerIcon = document.querySelector('.burger__icon');
    burgerIcon?.classList.add('_active');
  }

  function handleClickCloseNavbar() {
    setAnimationClass('animating-out');
    document.body.style.overflow = 'auto';

    const burgerIcon = document.querySelector('.burger__icon');
    burgerIcon?.classList.remove('_active');

    timeoutRef.current = window.setTimeout(() => {
      setIsOpenNavbar(false);
      setAnimationClass('');
    }, 300);
  }

  function toggleNavbar() {
    if (isOpenNavbar) {
      handleClickCloseNavbar();
    } else {
      handleClickOpenNavbar();
    }
  }

  useEffect(() => {
    const handleClickCloseNavbar = (event: MouseEvent | React.MouseEvent) => {
      if ((event.target as HTMLElement).closest('.navbar__link')) {
        setIsOpenNavbar(false);
        setAnimationClass('animating-out');
        document.body.style.overflow = 'auto';
        const burgerIcon = document.querySelector('.burger__icon');
        burgerIcon?.classList.remove('_active');
      }
    };

    document.addEventListener('click', handleClickCloseNavbar);
    return () => {
      document.removeEventListener('click', handleClickCloseNavbar);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div className="burger">
      <div className="burger__icon" onClick={toggleNavbar}>
        <span></span>
      </div>
      {isOpenNavbar && (
        <div className={`burger__navbar navbar ${animationClass}`}>
          <Navbar />
        </div>
      )}
    </div>
  );
};
