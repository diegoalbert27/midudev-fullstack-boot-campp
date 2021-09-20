import "./App.css";

const Titulo = (props) => {
  return <h1>{props.course}</h1>;
};

const Descripcion = (props) => {
  return (
    <p>
      {props.parts}
      <span>{props.exercises}</span>
    </p>
  );
};

const App = () => {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div className="App">
      <Titulo course="Half Stack application development from component " />
      <Descripcion parts="Fundamentals of React " exercises={exercises1} />
      <Descripcion parts="Using props to pass data " exercises={exercises2} />
      <Descripcion parts="State of a component " exercises={exercises3} />
      <Descripcion
        parts="Number of exercises "
        exercises={exercises1 + exercises2 + exercises3}
      />
    </div>
  );
};

export default App;
