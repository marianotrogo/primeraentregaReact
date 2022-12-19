import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer';
import Card from './components/Card/Card';
import Counter from './components/Counter/Counter';

const operacion = new Promise ((resolve,reject)=>{
  resolve("todo bien")
})

operacion.then((resultado) =>{
  console.log(resultado);
},err =>{
  console.log(err + "Error");
}).catch((err)=>{
  console.log(err);
})

function App() {

//   
  return (
    <div className="bg-secondary">
      <Navbar/>
      <ItemListContainer greeting={"Mariano Trogo"}/>
      
      {/* {cards.map(({titulo,descripcion,img,btnText},index)=>(
        <Card 
          key={index}
          titulo={titulo}
          descripcion={descripcion}
          img={img}
          btnText={btnText}/>))}
      <Card/> */}
    </div> 
  );
}

export default App;
