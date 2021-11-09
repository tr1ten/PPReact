import MyOrdersContext from "../../context/myorders";
import { Button } from "../UI/Button";
import './itemaddcart.scss';
import  {useContext,useState} from 'react';
const ItemAddCart = (props) => {
    const [amount,setAmount]= useState('1');
    const orderctx = useContext(MyOrdersContext)
    const addOrderToCart = ()=>{
            console.log('adding---',props.id,amount)
            orderctx.addOrder(props.id,amount)

    }
    const onChangeHandler = (e)=>{
        setAmount(e.target.value)
    }
    return (
        <div>
            <div className='itemAmount'>
                <p>Amount</p>
                <input type='number' value={amount} onChange={onChangeHandler} />
            </div>
            <Button text='+Add' onClick={addOrderToCart}/>
        </div>
    );
};

export default ItemAddCart; 