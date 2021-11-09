import './card.scss';
const Card = (props) => {
    return (
        <div className='card'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        </div>
    )
}
export default Card;