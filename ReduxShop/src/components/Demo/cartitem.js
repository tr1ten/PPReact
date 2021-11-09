import Button from "../UI/button"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { orderActions } from "../../store/order";
const CartItem = (props) => {
    const items = useSelector((state) => state.order.items)
    const cartItem = items.find((item) => item.id === props.citem.id)
    const dispatch = useDispatch()
    return (

        <div className="w-full m-3 p-2 flex items-start justify-around mx-auto my-4 bg-gray-700">
            <div className="flex flex-col ">
                <h2>{cartItem.title}</h2>
                <p>x{props.citem.quantity}</p>
            </div>
            <div className="flex flex-col">
                <h2>${cartItem.price*props.citem.quantity} (${cartItem.price} each) </h2>
                <div>
                    <Button className="inline-block m-1" onClick={()=>{
                        dispatch(orderActions.decrementCart(props.citem.id))
                    }} >-</Button>
                    <Button className="inline-block" onClick={()=>{
                        dispatch(orderActions.incrementCart(props.citem.id))
                    }}>+</Button>

                </div>

            </div>

        </div>)
}
export default CartItem;