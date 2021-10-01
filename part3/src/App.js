import "./App.css";
import { useState } from "react";

/**
 * Como la mayoría de las empresas, Unicafe recopila comentarios de sus clientes. Su tarea es
 * implementar una aplicación web para recopilar comentarios de los clientes. Solo hay tres
 * opciones para los comentarios: good (bueno), neutral y bad(malo).
 * La aplicación debe mostrar el número total de comentarios recopilados para cada categoría.
 * 
 * Amplíe su aplicación para que muestre más estadísticas sobre los comentarios recopilados: el
 * número total de comentarios recopilados, la puntuación promedio (buena: 1, neutral: 0, mala:
 * -1) y el porcentaje de comentarios positivos.
 */

const Title = ({ title }) => <h1>{title}</h1>

const Button = ({ title, handleClick }) => 
  <button onClick={handleClick} >{title}</button>

const Stadistics = ({title, point}) => <p>{title} <strong>{point}</strong></p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (state, setState) => () => {
    setState(state + 1)
  }
  
  const title = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad'
  }

  const handlerTotal = () => good + neutral + bad
  const handlerAverage = () => (good + (bad * -1)) / handlerTotal();
  const handlerPositive = () => good / handlerTotal() * 100;

  return (
    <div className="App" >
      
      <Title title="Give Feedback" />

      <Button title={title.good} handleClick={handleClick(good, setGood) } />
      <Button title={title.neutral} handleClick={handleClick(neutral, setNeutral) } />
      <Button title={title.bad} handleClick={handleClick(bad, setBad) } />

      <Title title="Stadistics" />

      { handlerTotal() === 0 
        ? <p>No feedback give</p>
        :
        <div>
          <Stadistics title={title.good} point={good} />
          <Stadistics title={title.neutral} point={neutral} />
          <Stadistics title={title.bad} point={bad} />

          <Stadistics title="all" point={handlerTotal()} />
          <Stadistics title="Average" point={isNaN(handlerAverage()) ? 0:handlerAverage()} />
          <Stadistics title="Positive" point={isNaN(handlerPositive()) ? 0:handlerPositive() + "%"} />
        </div>
      }

    </div>
  )
}

export default App;
