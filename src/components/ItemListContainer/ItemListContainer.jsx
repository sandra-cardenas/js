//TITULO DE LA PAGINA

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const ItemListContainer = ({productsData}) => { 

  return (
    <div style={{display:'flex', alignItems:'center',justifyContent: 'center',alignItems:'flex-star', backgroundColor:'#D5DBDB',height:'100vh'}}>
      {productsData.map((products) =>{
              return(
                
                <div> 

                <Card  key ={products.id} style={{height:'300px', width: '15rem', margin:'15px',  overflow:'hidden', border:'3px solid #D6DBDF '}}>
            <Link to={`/item/${products.id}`}>
      <Card.Img variant="top" src={products.thumbnail}/>
      </Link>
      <Card.Body>
        <Card.Title >{products.title}</Card.Title>
        <Card.Text>
          {products.description}
          
        </Card.Text>
        <div style={{ display:'flex',color:'black', justifyContent:'center',alignItems:'center', fontWeight:'bold', fontSize:'20px'}}> S/.{products.price}</div>
        
      </Card.Body>
    </Card>
    </div>)
                    
            })}
        
         </div>
    
  )
}

export default ItemListContainer