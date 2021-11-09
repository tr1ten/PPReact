import Header from "./components/Demo/header";
import ShoppingCart from "./components/Demo/shoppingcart";
import ShowProducts from "./components/Demo/showproducts";
import Title from "./components/UI/title";
import { useSelector } from "react-redux";
function App() {
  const showCart = useSelector((state)=>state.order.showCart)
  return (

    <div className='font-mono flex flex-col justify-center'>
    <Header />
    {showCart && <ShoppingCart />}
    <Title className="mx-auto  my-2 text-white text-xl" text="BUY YOUR FAV PRODUCTS" />
    <ShowProducts />
    </div>
  );
}

export default App;
