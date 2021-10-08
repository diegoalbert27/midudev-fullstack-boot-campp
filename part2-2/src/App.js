import "./App.css";
import { useState } from "react";
import { Note } from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNotes, setNewNotes] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handlerSubmitNotes = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNotes,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject))
    setNewNotes('')
  }

  const handlerChangeNotes = (e) => setNewNotes(e.target.value)

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)
  
  return (
    <div className="App">
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />          
        )}
      </ul>
      <form onSubmit={handlerSubmitNotes} >
        <input onChange={handlerChangeNotes} value={newNotes} />
        <button type="submit">save</button>
      </form>
    </div>
  )
};

export default App;
