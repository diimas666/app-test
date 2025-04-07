import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  // Массив пунктов меню для упрощения добавления новых элементов
  const menuItems = [
    { to: "/orders", label: "Приход" },
    { to: "/groups", label: "Группы" },
    { to: "/products", label: "Продукты" },
    { to: "/users", label: "Пользователи" },
    { to: "/settings", label: "Настройки" },
  ];

  // Функция для генерации классов NavLink
  const getNavLinkClass = ({ isActive }) =>
    `navigation-menu__link ${isActive ? "navigation-menu__link--active" : ""}`;

  return (
    <nav className="navigation-menu">
      <div className="navigation-menu__header">
        <img
          className="navigation-menu__avatar"
          src="https://avatar.iran.liara.run/public/boy"
          alt="avatar"
        />
      </div>
      <ul className="navigation-menu__list">
        {menuItems.map((item) => (
          <li key={item.to} className="navigation-menu__item">
            <NavLink to={item.to} className={getNavLinkClass}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;