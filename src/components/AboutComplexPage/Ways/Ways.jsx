import MapComponent from './MapComponent';
import TitleWays from './TitleWays';
import './style.css';

function Ways()
{return(
    <section id="ways" className="ways">
        <div className="ways_content">

            <div className="ways-content-block">

            <div className="ways-title">
                <h1>Как добраться</h1>
            </div>

                <TitleWays />
            </div>

            <MapComponent />
            
        </div>

    </section>
);

}

export default Ways;

