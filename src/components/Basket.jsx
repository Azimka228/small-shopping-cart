import React from 'react';
import './basket.css'
export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;
  return (
    <aside className="Aside">
      <h2>({cartItems.length})YOUR BAG</h2>
      <div className="Scroll">
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="BasketItem">
            <div className="col-2">
              <img src={item.img} ></img>
            </div>
            <div className="BasketItem_content">
              <div>
                <div className="BasketItem_name">{item.title}</div>
                <div className="qtyBtns">
                  <button onClick={() => onRemove(item)} className="remove">
                    -
                  </button>
                  <div>{item.qty}</div>
                  <button onClick={() => onAdd(item)} className="add">
                    +
                  </button>
                </div>
              </div>
              <div className="BasketItem_price">
                <div>{item.price}LL</div>
              </div>
            </div>

            {/* <div className="col-2 text-right">
              {item.qty} x {item.price} LL
            </div> */}
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>

            <hr />
            <div className="Chekout">
              <div className="Button_Checkout">
                <button onClick={() => alert('Implement Checkout!')}>
                  Checkout
                </button>
              </div>
              <div className="TotalPrice">
                <strong>{totalPrice} LL</strong>
              </div>
            </div>


          </>
        )}
      </div>
    </aside>
  );
}
