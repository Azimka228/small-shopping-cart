import React from 'react';
import './content_item.css';
function Content_item(props) {
  const { product, onAdd,ModalReturn} = props;
  return (
          <div className="Content_item">
            <div className="Content_item_avatar">
              <img src={product.img}></img>
            </div>
            <div className="Content_item_content">
              <div className="Content_item_content_title">
                {product.title}
              </div>
              <div className="Content_item_content_text">
              {product.text}
              </div>
              <div className="Content_item_content_price">
              {product.price} LL
              </div>
            </div>
            <div className="Content_item_buttons">
            <button className="Customize" onClick={()=>{return  ModalReturn(product)}}>Customize</button>
            <button className="quckAdd"onClick={() => onAdd(product)}>ADD</button>
            </div>
          </div>
  );
}

export default Content_item;
