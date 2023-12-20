
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useGetProductById } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {
  const { id }= useParams()




  const {productData}=useGetProductById(id)
   
  return (
    <Card  key ={productData.id} style={{ width: '17rem', margin:'15px',  overflow:'hidden',height:'80vh'}}>
    <Card.Img variant="top" src={productData.thumbnail}/>
    <Card.Body>
      <Card.Title>{productData.title}</Card.Title>
      <Card.Text>
        {productData.description}
        
      </Card.Text>
      <div> {productData.price}</div>
      <Button variant="primary">Añadir al carrito</Button>
    </Card.Body>
  </Card>
  )
} 
