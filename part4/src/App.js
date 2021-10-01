import "./App.css";
import { useState } from "react";

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(anecdotes.length)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handlerClick = () => 
    setSelected(Math.floor(Math.random() * anecdotes.length))

  const handleClickVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes);
  }

  const maxVotes = vote => {
    let find = 0;
    vote.forEach(v => {
      if (v > find)
        find = v
    })
    return find
  }

  const votesMax = votes.indexOf(maxVotes(votes))

  return (
    <div className="App">

      <h1>Anecdote of the day</h1>

      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      
      <button onClick={handlerClick} >next anecdote</button>
      <button onClick={handleClickVotes}>Votes</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[votesMax]}</p>
      <p>Has {votes[votesMax]} votes</p>
    </div>
  )
}

export default App;
