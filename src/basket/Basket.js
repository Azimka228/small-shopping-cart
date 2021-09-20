
import './Basket.css';


function Basket(props) {
    const {cartItems,onAdd} = props
    return (
        <div className="Basket">
           <h2>Card items</h2>
           <div>
               {cartItems.length === 0 && <div>Card is empty</div>}
               {cartItems.map((item) =>(
                   <div key={item.id}>
                       <div >{item.name}</div>
                   </div>

               ))}
           </div>
        </div>
    );
}

export default Basket;
