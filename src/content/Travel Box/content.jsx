import Basket from '../../components/Basket';
import './content.scss';
import Content_item from './content_item/content_item';
import React from 'react';
import useFetch from '../../CustomHooks/useFetch';
function Content(props) {
  const {cartItems, onAdd, onRemove, ModalReturn } = props;
  const {data,ispending} = (useFetch('http://localhost:8000/TravelBox'))
  return (
    <main>
      <div className="Content_wrapper">
        <div className="Content_title">
          <div className="Content_title_text">TravelBox</div>
          <div className="Content_title_search">
            <input type="text" placeholder="search menu"></input>
          </div>
        </div>
        <div className="Main_content">
          <div className="Content_items">
            {ispending && <div>Loading...</div>}
            {data && data.map((product) => (
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
