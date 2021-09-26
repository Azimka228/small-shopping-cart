import React from 'react';
import './swiper.scss';
import SwiperItem from './swiper_item/swiperItem';
function Swiper() {
  return (
    <div className="Swiper">
      <div className="Swiper_wrapper">
        <ul className="Swiper_list">
          <SwiperItem name="KIDS MEAL" link="/content/Kids Meal" />
          <SwiperItem name="TRAVEL BOX" link="/content/Travel Box" />
        </ul>
      </div>
    </div>
  );
}

export default Swiper;
