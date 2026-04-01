import {useState} from 'react';

function TitleWays() {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ways_title">
      <h2>Место:</h2>
      <h3>Конгрессно-выставочный центр «Экспофорум»</h3>
      <h2>Адрес:</h2>
      <h3>Санкт-Петербург, Петербургское шоссе, 64/1</h3>
      <h2>Время работы:</h2>
      <h3>10:00–18:00</h3>

      <button className='dropdown-button' onClick={toggleDropdown}>
        Как добраться?
      </button>
      
      {isOpen && (
        <div className="dropdown-content">
          <div className="transport-option">
            <h4>На автобусе:</h4>
            <ul>
              <li>Автобус № 100 от станции метро "Московская"</li>
              <li>Автобус № 200 от станции метро "Парк Победы"</li>
              <li>Маршрутное такси № К-100, К-200, К-300</li>
              <li>Время в пути: ~20-30 минут</li>
            </ul>
          </div>
          
          <div className="transport-option">
            <h4>На машине:</h4>
            <ul>
              <li>По Петербургскому шоссе в сторону аэропорта Пулково</li>
              <li>После аэропорта повернуть направо по указателю на Экспофорум</li>
              <li>Бесплатная парковка на 4700 мест</li>
              <li>Время в пути от центра: ~25-40 минут</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default TitleWays;