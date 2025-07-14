import './style.css';
import app_store from './contacts/app_store.png';
import google_play from './contacts/google_play.png';
import youtube from './contacts/youtube.png';
import vk from './contacts/vk.png';
import facebook from './contacts/facebook.png';
import instagram from './contacts/instagram.png';
import sub from './contacts/sub.png';

function Footer() {
  return (
    <div className="footer">
        <div className="footer-list">
            <div>
                <h3>О компании</h3>
                <a href="">О нашей компании</a>
                <a href="">Вакансии</a>
                <a href="">Партнеры</a>
                <a href="">Контакты</a>
            </div>
            <div>
                <h3>Экспонентам</h3>
                <a href="">Общие условия участия</a>
                <a href="">Услуги экспонентам</a>
                <a href="">Документы экспонентам</a>
                <a href="">Центр деловых контактов</a>
                <a href="">Забронировать гостиницу</a>
            </div>
            <div>
                <h3>Прессе</h3>
                <a href="">Аккредитация</a>
                <a href="">Пресс-служба</a>
                <a href="">Правила аккредитации</a>
            </div>
            <section id="contacts">
                <h3>Мы в соц. сетях</h3>
                <div className='cont_icons'>
                    <button className='icon_btn'><img src={youtube}></img></button>
                    <button className='icon_btn'><img src={vk}></img></button>
                    <button className='icon_btn'><img src={facebook}></img></button>
                    <button className='icon_btn'><img src={instagram}></img></button> 
                </div>
            </section>
            <div>
                <h3>Организаторам</h3>
                <a href="">Преимущества площадки</a>
                <a href="">Структура комплекса</a>
                <a href="">Онлайн-заявка на организацию</a>
                <a href="">Документы организаторам</a>
            </div>
            <div>
                <h3>Посетителям</h3>
                <a href="">Сервисы</a>
                <a href="">Онлайн-регистрация</a>
                <a href="">Забронировать гостиницу</a>
                <a href="">Центр деловых контактов</a>
            </div>
            <div>
                <h3>Приложение</h3>
                <button className='cont_btn'><img src={app_store}></img></button>
                <button className='cont_btn'><img src={google_play}></img></button> 
            </div>
            <div>
                <h3>Подписка на новости</h3>
                <h6>Получайте все самые последние новости о мероприятиях в Экспофоруме.</h6>
                <div className="subscribe-container">
                    <input 
                    type="email" 
                    placeholder="Введите ваш e-mail"
                    className="email-input"
                    />
                    <button className="subscribe-btn">
                    <img src={sub}></img>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;