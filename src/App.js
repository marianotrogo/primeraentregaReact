import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer';
function App() {

  return (
    <div className="bg-secondary">
      <Navbar/>
      <ItemListContainer greeting={"Mariano Trogo"}/>
    </div>
  );
}

export default App;
