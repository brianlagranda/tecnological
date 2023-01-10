import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <ItemCount initialQuantity={1} />
    </>
  );
}

export default App;
