import React from 'react';
import './Modal.scss';
function Modal({ SetModalActive, ModalActive }) {
  const handleClick = e => {
     console.log(e.target.parentNode)
  }
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
                <input onChange={handleClick.bind(this)} type="checkbox"/>dsdsds{ModalActive.ADD[0].title}
                <div className="Modal_ingridients_card_btn_price">{ModalActive.ADD[0].price}</div>
              </div>
              <div className="Modal_ingridients_card_btn">
                <input onChange={handleClick.bind(this)} type="checkbox"/>dsdsds{ModalActive.ADD[0].title}
                <div className="Modal_ingridients_card_btn_price">{ModalActive.ADD[0].price}</div>
              </div>
              <div className="Modal_ingridients_card_btn">
                <input onChange={handleClick.bind(this)} type="checkbox"/>dsdsds{ModalActive.ADD[0].title}
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
