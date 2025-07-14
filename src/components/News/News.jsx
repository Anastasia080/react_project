import NewBlock from './new-block';
import new_image1 from './news/1.jpg';
import new_image2 from './news/2.jpg';
import new_image3 from './news/3.jpg';
import new_image4 from './news/4.jpg';
import new_image5 from './news/5.jpg';

import './style.css';

function News()
{return(
    <section id="news" className="news">
        <div className="news_box">
            <div className='news_img'>
                <a href=""><img src={new_image1}/></a>
                <a href=""><img src={new_image2}/></a>
            </div>
            <div className='news_list'>
                <div className='news_title'>
                    <h4>Новости</h4>
                    <a href="">Все новости &rarr;</a>
                </div>
                <NewBlock 
                    title="Как объединилась реальность и виртуальность – LIKEE PARTY"
                    linkUrl=""
                    picture={new_image3}
                    data="4 января 2020 г."
                />
                <NewBlock 
                    title="Как объединилась реальность и виртуальность – LIKEE PARTY"
                    linkUrl=""
                    picture={new_image4}
                    data="2 января 2020 г."
                />
                <NewBlock 
                    title="Как объединилась реальность и виртуальность – LIKEE PARTY"
                    linkUrl=""
                    picture={new_image5}
                    data="2 января 2020 г."
                />
            </div>
        </div>
    </section>
);

}

export default News;