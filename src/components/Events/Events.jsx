import EventBlock from './event-block';
import treeImage from './pictures/tree.jpg';
import junwexImage from './pictures/junwex.png';
import nevskiiImage from './pictures/nevskii.png';
import ponaehaliImage from './pictures/ponaehali.jpg';
import vetcampiImage from './pictures/vetcamp.jpg';
import vet_logoImage from './pictures/vet_logo.png';

import './style.css';

function Events() {
  return (
    <section id="events" className="events">
        <div className="event_title">
          <h4>Текущие и будущие мероприятия</h4>
          <a href="">Все мероприятия &rarr;</a>
        </div>
        <div className='events_box'>
          <EventBlock 
          title="ЭСПО ЕЛКА"
          linkUrl=""
          picture={treeImage}
          data="2 января 2020 г. – 7 января 2020 г."
          describe="Парк интерактивных развлечений"
        />
        <EventBlock 
          title="Junwex Петербург"
          linkUrl=""
          picture={junwexImage}
          data="5 февраля 2020 г. – 9 февраля 2020 г."
          describe="Выставка ювелирных изделий"
        />
        <EventBlock 
          title="Невский ларец"
          linkUrl=""
          picture={nevskiiImage}
          data="7 февраля 2020 г. – 9 февраля 2020 г."
          describe="Выставка-ярмарка народных художественных промыслов и ремесел"
        />
        <EventBlock 
          title="ПОНАЕХАЛИ!"
          linkUrl=""
          picture={ponaehaliImage}
          data="14 февраля 2020 г. – 23 февраля 2020 г."
          describe="Специализированная арт-ярмарка"
        />
        <EventBlock 
          title="VET.CAMP"
          linkUrl=""
          picture={vetcampiImage}
          data="18 февраля 2020 г. – 21 февраля 2020 г."
          describe="Конференция для ветеринарных врачей"
        />
        <EventBlock 
          title="ExpoHoReCa"
          linkUrl=""
          picture={vet_logoImage}
          data="26 февраля 2020 г. – 28 февраля 2020 г."
          describe="Специализированная выставка"
        />
      </div>
    </section>
  );
}

export default Events;