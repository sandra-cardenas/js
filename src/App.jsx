import NavBarComponent from "./components/navBarComponent/navBarComponent"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import 'bootstrap/dist/css/bootstrap.min.css';
const App = () =>{

    return (
    <div style={ {width: '100vw', height: '100vh', backgroundColor:'#F1F0E8'}}>
        <NavBarComponent />
        <ItemListContainer greeting="PRODUCTOS DISPONIBLES"/>
      
          </div>            
        );
}
 export default App;
