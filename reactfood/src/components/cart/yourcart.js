import Badge from "../UI/badge";
import './yourcart.scss';
import MyOrdersContext from '../../context/myorders'
import {useContext} from 'react';
const YourCart = ()=>{
    const orderscontext = useContext(MyOrdersContext)
    console.log('in yurcart',orderscontext.myOrders)
    return (
        <div className='yourcart'>
            <h3>Your cart</h3>
            <Badge amount={orderscontext.myOrders.length} />
        </div>
    )
}
export default YourCart;