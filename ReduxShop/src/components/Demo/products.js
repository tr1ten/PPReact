import Button from "../UI/button";
import Info from "./info";
import Title from "../UI/title";
import ColoredLine from "../UI/line";
import { useDispatch } from "react-redux";
import { orderActions } from "../../store/order";
const Product = (props)=>{
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col bg-white w-3/5 rounded-md p-2 shadow-lg m-2">

            <div className="flex justify-between items-center ">
                <Title text={props.title} />
                <Info>${props.price}</Info>

                
            </div>
            <ColoredLine color='red' />
            <div className="flex justify-between m-2">
                <p className="text-gray-400">{props.description}</p>
                <Button onClick={()=>{
                    dispatch(orderActions.addToCart(props.id))
                }}>Add to cart</Button>
            </div>

        </div>
    );

}
export default Product;