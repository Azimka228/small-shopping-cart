import React from 'react';
import logo from './logo.png'
import './Menu.scss';
import { NavLink} from "react-router-dom";
function Menu(props) {
  const { countCartItems } = props
  return (
    <div className="Menu">
      <div className="Menu_bg"></div>
      <div className="Menu_wrapper">
        <div className="Menu_logo"><NavLink to="/">
          <img src={logo}></img>
        </NavLink></div>
        <div className="CountrySwithcer"></div>
        <div className="LoginBtn">sing in</div>
        <div className="GoCheckout">
          <div className="GoCheckout_score"><span>{countCartItems}</span></div>
        </div>
        <div className="GoToHomePage">
          <div className="RecommendTitle">We Recommend</div>
        </div>
        <div className="burger-menu">
        </div>
        <div className="Call_Number">1523</div>
      </div>
    </div>
  );
}
export default Menu;
