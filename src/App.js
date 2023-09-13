import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 

function App() {
  return (
    <div>
      <NavBar texto="soy un texto">
        <h1>Children1</h1>
        <h1>Children2</h1>  
      </NavBar>

      <ItemListContainer greeting="¡Bienvenidos Altitude!"/>
    </div>
  );
}

export default App;
