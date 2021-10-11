import Basket from '../../components/Basket';
import './content.scss';
import Content_item from './content_item/content_item';
import React from 'react';
import useFetch from '../../CustomHooks/useFetch';
import { useState,  } from 'react';
function Content(props) {
  const { cartItems, onAdd, onRemove, ModalReturn } = props;
  const [SearchItem,SetSearchItem] = useState("")
  const { data, ispending } = (useFetch('http://localhost:8000/Meal'))
  return (
    <main>
      <div className="Content_wrapper">
        <div className="Content_title">
          <div className="Content_title_text">KIDS MEAL</div>
          <div className="Content_title_search">
            <form action="/content/Kids Meal" method="get" onSubmit={() => {data && data.filter( el => {
              if (SearchItem == "") {
                return el
              } else if (el.title.toLowerCase().includes(SearchItem.toLowerCase())){
                return el
              }
            })}}>
              <input type="text" placeholder="search menu" name="s" onChange={(e) => {return SetSearchItem(e.target.value)}} ></input>
              <button type="submit">{SearchItem}</button>
            </form>
          </div>
        </div>
        <div className="Main_content">
          <div className="Content_items">
            {ispending && <div>Loading...</div>}
            {data && data.filter( el => {
              if (SearchItem == "") {
                return el
              } else if (el.title.toLowerCase().includes(SearchItem.toLowerCase())){
                return el
              }
            }).map((product) => (
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
