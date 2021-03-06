import Header from './Header/header';
import Main from './components/Main';
import Basket from './components/Basket';
import Footer from './footer/footer';
import Swiper from './Swiper/swiper';
import KidsMeal from './content/Kids Meal/content';
import TravelBox from './content/Travel Box/content';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import data from './data';
import { useState } from 'react';
import Modal from './Modal/Modal';
function App() {
  const { products, Eating } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const [ModalActive,SetModalActive] = useState(false)
  const ModalReturn =(el) => {
    console.log(el)
    SetModalActive({...el})
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header countCartItems={cartItems.length}></Header>
        <Swiper />
        <div className="Main">
          <Switch>
            <Route path="/content/Kids Meal" component={() => {
              return <KidsMeal products={products} onAdd={onAdd} cartItems={cartItems} SetModalActive={SetModalActive}
              ModalReturn={ModalReturn}
                onAdd={onAdd}
                onRemove={onRemove} />
            }} />
            <Route path="/content/Travel Box" component={() => {
              return <TravelBox Eating={Eating} onAdd={onAdd} cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove} />
            }} />
             <Route path="/" component={() => {
              return <KidsMeal products={products} onAdd={onAdd} cartItems={cartItems} SetModalActive={SetModalActive}
              ModalReturn={ModalReturn}
                onAdd={onAdd}
                onRemove={onRemove} />
            }} />
          </Switch>
          {ModalActive && <Modal SetModalActive={SetModalActive} products={products} ModalActive={ModalActive}/>}
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
