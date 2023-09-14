import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 

function App() {
  return (
    <div>
      <NavBar />

      <ItemListContainer greeting="¡Bienvenidos Altitude!"/>
    </div>
  );
}

export default App;
