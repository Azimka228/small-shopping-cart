import Food from '../Food_1.png'
import './swiperItem.css';
import {
  Link,NavLink
} from "react-router-dom";

function SwiperItem(props) {
  return (
    <li className="Swiper_list_item">
      <NavLink  className="Swiper_list_image" activeClassName="hurray" to={props.link}>
        <img src={Food}></img>
      </NavLink >
      <div className="Swiper_list_text">
        <a>{props.name}</a>
      </div>
    </li>
  );
}

export default SwiperItem;
