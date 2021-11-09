import ItemAddCart from "../cart/ItemAddCart";
import  ItemDetail from "./ItemDetail";
import './listitem.scss';
const ListItem= (props)=>{
    return (
        <div className='item-container' >
        <ItemDetail title={props.title} description={props.description} price={props.price} />
        <ItemAddCart id={props.id}/>
        </div>
    );
}
export default ListItem;

