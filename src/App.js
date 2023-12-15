import './App.css';
import LogoApp from './images/1.jpg'
import Boton from './components/Boton'
import Pantalla from './components/Pantalla'

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img src={LogoApp}
        className='logo-app'
        alt='logo-app' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla/>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
