import { useState, useEffect } from 'react';

function TopMenu() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Обновляем время каждую секунду
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(interval);
  }, []);

  // Форматируем дату и время как на скрине: "12 MAR, 2017 17:20"
  const formattedDate = currentTime.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).toUpperCase(); // "12 MAR, 2017"

  const formattedTime = currentTime.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }); // "17:20"

  return (
    <div className="top-menu">
      <div className="top-menu__logo">
        <span className="top-menu__icon">🛡️</span>
        INVENTORY
      </div>
      <div className="top-menu__search">
        <input type="text" placeholder="Поиск" className="top-menu__search-input" />
      </div>
      <div className="top-menu__datetime">
        <span className="top-menu__date">{formattedDate}</span>
        <span className="top-menu__time">{formattedTime}</span>
        {/* Заглушка для счетчика активных вкладок */}
        <span className="top-menu__counter">0</span>
      </div>
    </div>
  );
}

export default TopMenu;