import React, { useState } from "react";
const MyOrdersContext = React.createContext({});
export const MyOrdersProvider = (props) => {
    const foodItems = [
        { id:'1', title:'Sushi', description:'good sushi', price:"22.99" },
        { id:'2', title:'Mushi', description:'not good sushi', price:"69.99" }
        
    ]
    const [myOrders, setMyOrders] = useState([]);
    console.log('building provider',myOrders)
    const addOrder = (itemId, amount) => {
        
        
        setMyOrders((olditems) => [...olditems,{
            itemId: itemId,
            amount: amount,
        }])
    }
    return <MyOrdersContext.Provider value={{ myOrders: myOrders, foodItems: foodItems, addOrder: addOrder }} > {props.children}</MyOrdersContext.Provider>
}
export default MyOrdersContext;
