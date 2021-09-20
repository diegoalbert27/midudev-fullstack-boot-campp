import './App.css';

const Mensaje = () => {
  return <h1>Hola Mundo</h1>
}

const Descricion = () => {
  return <p>Este es la app del curso bootcamp fullstack</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje/>
      <Mensaje/>
      <Mensaje/>
      <Descricion/>
    </div>
  );
}

export default App;