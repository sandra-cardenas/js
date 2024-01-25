import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

//Carrito de compras
const CartWidget =()=>{
    const {count} = useContext(CartContext);  
  console.log(count)
 const totalQuantity = count.reduce((total, item) => total + item.quantity, 0);
   
 
    return(<div> 
        <img src="../imagenes/carrito-de-compras.png 
        " alt="logo-carrito-de-compras" style= {{
            width: '30px',
            height: 'auto',
            marginLeft: '30px',}}/> 
            
         <span style={{   
             width: '100px', 
             height: '100px',
             margin: '5px',
             color: 'black',
             fontWeight: 'bolder',
             fontSize: '15px',
             alignContent: "center"
            
          }} 
    > {totalQuantity}</span> 
        </div>
             )
}
export default CartWidget


