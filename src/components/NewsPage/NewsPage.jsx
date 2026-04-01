import Header from "../MainPage/FirstScreen/Header";
import NewsContainer from "./NewsContainer";
import './style.css';

function NewsPage(){
    return(
        <section id="news_page" className="news_page">
            <div className="headernews">
                <div className="header-background"></div>
                <Header />
                <hr/>
                <div className="news_title">
                    <h1>Новости</h1>
                    <button className="button_news">О комплексе</button>
                    <button className="button_news">О компании</button>
                    <button className="button_news">О мероприятии</button>
                    <button className="button_news">Все</button>
                </div>
            </div>

            <div className="news-content">

                <div className="news_search">

                    <div className="search-form">
                        <div className="search-input-container">
                            <input 
                                type="text" 
                                className="search-input" 
                                placeholder="Что ищем?"
                            />
                        </div>
                        
                        <div className="filter-buttons">
                            <button className="filter-btn">Выбрать год</button>
                            <button className="filter-btn">Выбрать месяц</button>
                            <button className="filter-btn">Выбрать категорию</button>
                            <button className="filter-btn find-btn">Найти</button>
                        </div>
                    </div>
                </div>

                    <NewsContainer />
            </div>

        </section>
    );
}

export default NewsPage;