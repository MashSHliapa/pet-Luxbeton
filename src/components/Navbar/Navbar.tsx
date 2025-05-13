import './Navbar.scss';
export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="#catalog" className="navbar__link">
            Каталог
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Фотогалерея
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Акции
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            О компании
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Проекты
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};
