import Basket from '../../components/Basket';
import './content.css';
import Content_item from './content_item/content_item';

function Content(props) {
  const { Eating, cartItems, onAdd, onRemove } = props;
  return (
    <main>
      <div className="Content_wrapper">
        <div className="Content_title">
          <div className="Content_title_text">Travel Box</div>
          <div className="Content_title_search">
            <input type="text" placeholder="search menu"></input>
          </div>
        </div>
        <div className="Main_content">
          <div className="Content_items">
            {Eating.map((Eating) => (
              <Content_item key={Eating.id} Eating={Eating} onAdd={onAdd} />
            ))}
          </div>
          <div className="Basket">
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            ></Basket>
          </div>
        </div>


      </div>

    </main>

  );
}

export default Content;
