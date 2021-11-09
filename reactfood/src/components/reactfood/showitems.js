import ListItem  from "./ListItem";
import { useContext } from "react";
import './showitems.scss'
import MyOrdersContext from "../../context/myorders";
const ShowItems= (props)=>{
    const orderctx = useContext(MyOrdersContext);
    return (
        <div className='showitem-container'>
            {orderctx.foodItems.map((itemm)=>{
                return  <ListItem key={itemm.id} id={itemm.id} title={itemm.title} description={itemm.description} price={itemm.price} /> 
            })}
        </div>
    );
}
export default ShowItems;
