const Title = (props)=>{
    return (
    <h2 className={`font-bold ${props.className}`}>
            {props.text}
        </h2>
    );
}
export default Title;