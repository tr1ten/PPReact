import YourCart from "../cart/yourcart";
import './header.scss'
const Header = ()=>{
    return (
        <header>
            <h2>React Meals</h2>
            <YourCart />
            
        </header>
    )

}
export default Header;