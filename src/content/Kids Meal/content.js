import Basket from '../../components/Basket';
import './content.css';
import Content_item from './content_item/content_item';

function Content(props) {
  const { products, cartItems, onAdd, onRemove,SetModalActive,ModalReturn } = props;
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
              <Content_item key={product.id} product={product} onAdd={onAdd} SetModalActive={SetModalActive} ModalReturn={ModalReturn}/>
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
