import { Link } from 'react-router-dom';
import new_image1 from './news/1.jpg';
import new_image2 from './news/2.jpg';
import NewApi from './NewApi';

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
                    <Link to="/news">Все новости &rarr;</Link>
                </div>
                <NewApi />
            </div>
        </div>
    </section>
);

}

export default News;