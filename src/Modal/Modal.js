import React from 'react';
import './Modal.css';
function Modal({ SetModalActive, ModalActive }) {
  console.log(Object.keys(ModalActive.ADD))
  return (
    <div className='Modal' onClick={() => SetModalActive(false)}>
      <div className="Modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="Modal_title">
          <div className="Modal_avatar">
            <img src={ModalActive.img}></img>
          </div>
          <div className="Modal_title_content">
            <div className="Modal_title_content_Heading">{ModalActive.title}</div>
            <div className="Modal_title_content_text">{ModalActive.text}</div>
            <div className="Modal_title_content_price">{ModalActive.price} LL</div>
          </div>
        </div>
        <div className="Modal_ingridients">
          <div className="Modal_ingridients_items">
            <div className="Modal_ingridients_card">
              <div className="Modal_ingridients_card_title">ADD</div>
              <div className="Modal_ingridients_card_btn">
                <div className="Modal_ingridients_card_btn_title">{ModalActive.ADD[0].title}</div>
                <div className="Modal_ingridients_card_btn_price">{ModalActive.ADD[0].price}</div>
              </div>
            </div>
            <div className="Modal_ingridients_card">
              <div className="Modal_ingridients_card_title">ADD</div>
              <div className="Modal_ingridients_card_btn">
                <div className="Modal_ingridients_card_btn_title">{ModalActive.ADD[0].title}</div>
                <div className="Modal_ingridients_card_btn_price">{ModalActive.ADD[0].price}</div>
              </div>
            </div>
            <div className="Modal_ingridients_card">
              <div className="Modal_ingridients_card_title">ADD</div>
              <div className="Modal_ingridients_card_btn">
                <div className="Modal_ingridients_card_btn_title">{ModalActive.ADD[0].title}</div>
                <div className="Modal_ingridients_card_btn_price">{ModalActive.ADD[0].price}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
