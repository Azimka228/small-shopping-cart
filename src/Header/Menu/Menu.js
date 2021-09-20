import logo from './logo.png' 
import './Menu.css';

function Menu(props) {
  const {countCartItems} = props
  return (
    <div className="Menu">
      <div className="Menu_bg"></div>
      <div className="Menu_wrapper">
        <div className="Menu_logo"><img src={logo}></img></div>
        <div className="CountrySwithcer"></div>
        <div className="LoginBtn">sing in</div>
        <div className="GoCheckout">
          <div className="GoCheckout_score"><span>{countCartItems}</span></div>
        </div>
        <div className="GoToHomePage">
          <div className="RecommendTitle">We Recommend</div>
        </div>
        <div className="burger-menu">
          d
        </div>
      </div>
    </div>
    
  );
}

export default Menu;
