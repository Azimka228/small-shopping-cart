import Basket from '../../components/Basket';
import './content.css';
import Content_item from './content_item/content_item';
import React from 'react';
import { useEffect} from 'react';
function Content(props) {

  const { products, cartItems, onAdd, onRemove, ModalReturn } = props;

  useEffect(() => {
    fetch('http://localhost:8000/Meal')
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data)
      })})
    return (
      <main>
        <div className="Content_wrapper">
          <div className="Content_title">
            <div className="Content_title_text">KIDS MEAL</div>
            <div className="Content_title_search">
              <input type="text" placeholder="search menu"></input>
            </div>
          </div>
          <div className="Main_content">
            <div className="Content_items">
              {products.map((product) => (
                <Content_item key={product.id} product={product} onAdd={onAdd} ModalReturn={ModalReturn} />
              ))}
            </div>
            {cartItems.length > 0 && <div className="Basket">
              <Basket
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              ></Basket>
            </div>}
          </div>
        </div>
      </main>
    );
  }

export default Content;
