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
          <a href="#gallery" className="navbar__link">
            Фотогалерея
          </a>
        </li>
        <li className="navbar__item">
          <a href="#promotion" className="navbar__link">
            Акции
          </a>
        </li>
        <li className="navbar__item">
          <a href="#howWeWork" className="navbar__link">
            О компании
          </a>
        </li>
        <li className="navbar__item">
          <a href="#complexes" className="navbar__link">
            Проекты
          </a>
        </li>
        <li className="navbar__item">
          <a href="#footer" className="navbar__link">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};
