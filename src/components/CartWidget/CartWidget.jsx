//Carrito de compras
const CartWidget =()=>{
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
    > 0 </span>
        </div>
             )
}
export default CartWidget


