
import Card from 'react-bootstrap/Card';
import { useGetProductById } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount/ItemCount';


export const ItemDetailContainer = () => {
  const { id }= useParams()




  const {productData}=useGetProductById("products", id)
   
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent: 'center',alignItems:'flex-star', backgroundColor:'#D5DBDB',height:'100vh'}} >
    <Card  key ={productData.id} style={{height:'400px', width: '15rem', margin:'15px',  overflow:'hidden', border:'3px solid #D6DBDF '}}>
    <Card.Img variant="top" src={productData.thumbnail}/>
    <Card.Body>
      <Card.Title>{productData.title}</Card.Title>
      <Card.Text>
        {productData.description}
        
      </Card.Text>
      <div style={{ display:'flex',color:'black', justifyContent:'center',alignItems:'center', fontWeight:'bold', fontSize:'20px'}}>S/. {productData.price}</div>
      <ItemCount productId ={productData.id} />
      {/* <Button variant="primary" style={{margin: '10px'}}>Añadir al carrito</Button> */}
    </Card.Body>
  </Card>
  </div>
  )
} 
