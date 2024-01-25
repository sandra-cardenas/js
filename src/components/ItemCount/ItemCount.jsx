
import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import {CartContext}from "../../context/CartContext"

const ItemCount = ({productId}) => {
  const [countItem, setCountItem]= useState (1);

  const { count, setCount} = useContext(CartContext)
const handleAdd =()=>{
  setCountItem(countItem + 1)

}
const handleRemove = ()=>{
  setCountItem (countItem -1)


}
const handleAddProductToCart = () => {
  const productExists = count.find((item) => item.id === productId);

  if (productExists) {
    setCount(
      count.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + countItem }
          : item
      )
    );
  } else {
    setCount([...count, { id: productId, quantity: countItem }]);
  }

  setCountItem(1);
};


  return (
    <div style={{
      width:'100%',
      flexDirection:'column',
     

    }}
    > 
      <div style={{ width:'70%', display:'flex',alignItems:'center', justifyContent:'space-between', margin:'auto'}}>
    <Button style={{ backgroundColor:'#ADC4CE', color:'black', border:'none'}} onClick={handleRemove}>- </Button>
    <span>{countItem}</span>
    <Button style={{ backgroundColor:'#ADC4CE', color:'black', border:'none'}} onClick={handleAdd}> + </Button>
  </div>
  <Button style={{margin:'20px', backgroundColor:'#ADC4CE', color:'black', border:'none'}}onClick={handleAddProductToCart}>Agregar al carrito </Button>

    </div>
   
  )
}

export default ItemCount    