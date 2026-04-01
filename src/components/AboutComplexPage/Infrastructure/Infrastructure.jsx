import InfrastructBlock from './InfrastructBlock';
import HotelImage from './pictures_inf/hotel.png'
import CafeImage from './pictures_inf/cafe.jpg'
import ChurchlImage from './pictures_inf/church.jpg'
import ParkImage from './pictures_inf/park.jpg'
import ParkingImage from './pictures_inf/parking.jpg'
import Customs_logistics_complexImage from './pictures_inf/customs and logistics complex.png'
import Business_centersImage from './pictures_inf/business centers.jpg'

import './style.css';

function Infastructure() {
  return (
    <section id="infrastructure" className="infrastructure">
        <div className="infastruct_title">
          <h4>ИНФРАСТРУКТУРА КОМПЛЕКСА</h4>
        </div>
        <div className='infrastruct-block_box'>
          <InfrastructBlock 
          title="Отели. Центр Carelica Eco Spa"
          picture={HotelImage}
          linkUrl=""
          describe="На территории Экспофорума вы можете воспользоваться услугами отелей Hilton St. Petersburg Expoforum 4*"
        />
        <InfrastructBlock 
          title="Кафе и рестораны"
          picture={CafeImage}
          linkUrl=""
          describe="На территории Экспофорума кафе на 1-м этаже зоны Е (вход со стороны пассажа)"
        />
        <InfrastructBlock 
          title="Парковка"
          picture={ParkingImage}
          linkUrl=""
          describe="На территории Экспофорума находится парковка на 4700 машино-мест"
        />
        <InfrastructBlock 
          title="Парковая зона"
          picture={ParkImage}
          linkUrl=""
          describe="На территории конгрессно-выставочного комплекса располагается сад, в котором высажено 44 178 деревьев и кустарников"
        />
        <InfrastructBlock 
          title="Церковь Смоленской иконы Божией Матери"
          picture={ChurchlImage}
          linkUrl=""
          describe="Фрагменты фундамента церкви были обнаружены при планировании строительства Экспофорума"
        />
        <InfrastructBlock 
          title="Бизнес-центры"
          picture={Business_centersImage}
          linkUrl=""
          describe="На территории комплекса расположено два бизнес-центра, где сдаются офисные помещения в аренду"
        />
        <InfrastructBlock 
          title="Таможенно-логистический комплекс"
          picture={Customs_logistics_complexImage}
          linkUrl=""
          describe="На территории Экспофорума также расположен таможенно-логистический комплекс, который обеспечивает удобные условия для осуществления таможенных и логистических операций"
        />
      </div>
    </section>
  );
}

export default Infastructure;