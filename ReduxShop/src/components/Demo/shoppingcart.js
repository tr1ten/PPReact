import Title from "../UI/title";
import CartItem from "./cartitem";
import { useSelector } from "react-redux";
const ShoppingCart = () => {
    const carts = useSelector((state)=>state.order.carts)
    
    return (
        <div className="bg-gray-900 w-6/12 mx-auto my-2 text-white p-3 flex flex-col">
            <Title text="Your Shopping Cart" />
            {carts.map((item)=>{
                return (<CartItem citem={item} />)
            })} 
        </div>
    );
}
export default ShoppingCart;