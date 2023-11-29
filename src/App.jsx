import "./App.css"
function App() {
  const condition = true;
  if (condition) {
    console.log("Hello world");
        
   } else{
    console.log("Hello none");
   }
    return (
    <div>
      {condition ? <h1> Verdadero</h1> : <h1> Falso</h1>}
      <h1> Hello World</h1>
      <h1> prueba 1
      </h1>
      <p> Mi primera aplicacion React</p>
    </div>
    );
}
 export default App;
 