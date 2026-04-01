import './style.css';

function SideMenu() {
  return (
    <section id="side-menu" className="side-menu">
        <div className="side-menu-list">
            <div>
                <h4>Организаторам</h4>
                <a href="">Документы организаторам</a>
                <a href="">Услуги организаторам</a>
                <a href="">Выставочные площади</a>
                <a href="">Рестораны и кафе</a>
                <a href="">Конгресс-центр</a>
                <a href="">Спорт-центр</a>
            </div>
            <div>
                <h4>Экспонентам</h4>
                <a href="">Общие условия участия</a>
                <a href="">Услуги экспонентам</a>
                <a href="">Документы экспонентам</a>
                <a href="">Центр деловых контактов</a>
                <a href="">Забронировать гостиницу</a>
            </div>
            <div>
                <h4>Посетителям</h4>
                <a href="">Сервисы</a>
                <a href="">Онлайн-регистрация<br />на мероприятие</a>
                <a href="">Забронировать гостиницу</a>
                <a href="">Центр деловых контактов</a>
            </div>
            <div>
                <h4>Прессе</h4>
                <a href="">Аккредитация</a>
                <a href="">Пресс-служба</a>
                <a href="">Правила аккредитации</a>
            </div>

        </div>
    </section>
  );
}

export default SideMenu;