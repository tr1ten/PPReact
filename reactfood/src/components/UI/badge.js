import './badge.scss';
const Badge = (props)=>{
    return (
        <div className='badge'>
            {props.amount}
        </div>
    );
}
export default Badge;