import Product from "./products";
import { useSelector } from "react-redux";
const ShowProducts = ()=>{
    const products = useSelector((state)=>state.order.items)
    return (
        <div className="mx-auto flex flex-col w-9/12 items-center">
            {products.map((product)=>{
                return (<Product id={product.id} title={product.title} price={product.price} description={product.description} /> )
            })}
            
        </div>
    );
}
export default ShowProducts;