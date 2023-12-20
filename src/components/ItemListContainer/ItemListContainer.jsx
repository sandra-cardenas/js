//TITULO DE LA PAGINA
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const ItemListContainer = ({productsData}) => { 
  return (
    <div style={{display:'flex', alignItems:'strech',justifyContent: 'center',flexWrap: 'wrap'}}>
      {productsData.map((products) =>{
              return(
                
                <div>

                <Card  key ={products.id} style={{ width: '17rem', margin:'15px',  overflow:'hidden'}}>
            <Link to={`/item/${products.id}`}>
      <Card.Img variant="top" src={products.thumbnail}/>
      </Link>
      <Card.Body>
        <Card.Title>{products.title}</Card.Title>
        <Card.Text>
          {products.description}
          
        </Card.Text>
        <div> {products.price}</div>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
    </div>)
                    
            })}
        
         </div>
    
  )
}

export default ItemListContainer