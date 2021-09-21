
import './content_item.css';

function Content_item(props) {
  console.log(props)
  const { Eating, onAdd } = props;
  return (
          <div className="Content_item">
            <div className="Content_item_avatar">
              <img src={Eating.img}></img>
            </div>
            <div className="Content_item_content">
              <div className="Content_item_content_title">
                {Eating.title}
              </div>
              <div className="Content_item_content_text">
              {Eating.text}
              </div>
              <div className="Content_item_content_price">
              {Eating.price} LL
              </div>
            </div>
            <div className="Content_item_buttons">
            <button className="Customize">Customize</button>
            <button className="quckAdd"onClick={() => onAdd(Eating)}>ADD</button>
            </div>
          </div>
          
  );
}

export default Content_item;
