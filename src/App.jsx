
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainRouter } from "./router/MainRouter";
import {CartProvider} from "./context/CartContext"
 


const App = () =>{
  
    return (
    <div style={ {width: '100vw', height: 'auto', backgroundColor:'#F1F0E8'}}>
       
       <CartProvider> 
        <MainRouter/>
       </CartProvider>
        
    </div>             
        );
}  
 export default App;
 