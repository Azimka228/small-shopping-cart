
import './swiper.css';
import SwiperItem from './swiper_item/swiperItem';

function Swiper(props) {
  return (
    <div className="Swiper">
      <div className="Swiper_wrapper">
          <ul className="Swiper_list">
          
            <SwiperItem name="KIDS MEAL" link ="/content/Kids Meal"/>
            <SwiperItem name="TRAVEL BOX" link ="/content/Travel Box"/>
          </ul>
      </div>
    </div>
  );
}

export default Swiper;
