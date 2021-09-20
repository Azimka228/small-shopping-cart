import Menu__background from './Menu_background/Menu__background';
import Menu from './Menu/Menu';
import Image from './Image/image';
import Gradient from './gradient/gradient';
import './header.css';

function Header(props) {
   const {countCartItems} = props
  return (
    <header>
        <Menu countCartItems={countCartItems}/>
        <Gradient/>
        <Image/>
        
    </header>
    
  );
}

export default Header;
