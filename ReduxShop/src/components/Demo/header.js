import Button from "../UI/button"
import Info from "./info";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { orderActions } from "../../store/order";
const Header = () => {
    const dispatch = useDispatch()
    const cartsLen = useSelector((state)=>state.order.carts.length)
    return (
        <div className="flex justify-around items-center bg-gray-900 text-white p-2 " >
            <h1 className="font-bold text-2xl">ReduxCart  </h1>
            <Button onClick={()=>{
                dispatch(orderActions.toggleCart())
            }}>My Cart <Info>{cartsLen}</Info></Button>
        </div>
    )
}
export default Header;
