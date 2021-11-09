import './itemdetail.scss';
const ItemDetail = (props) => {
    return (
        <div className="item-details">
            <h3>{props.title}</h3>
            <p className='item-description'>{props.description}</p>
            <span className='item-price'>${props.price}</span>

        </div>
    );
};
export default ItemDetail;