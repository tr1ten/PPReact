const Button = (props)=>{
    return (
        <button onClick={props.onClick} className={`border-2 rounded-lg border-pink-300 p-2 text-center bg-primary hover:bg-pink-300 ${props.className}`}  >{props.children}</button>
    )
}
export default Button;