import "./App.css";

import { Note } from "./components/Note";
import { ShowNote } from "./components/ShowNote"
import { FormNote } from "./components/FormNote";

import { useState, useEffect } from "react";
import noteService from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNotes, setNewNotes] = useState('')
  const [load, setLoad] = useState(true)
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    const dataPosts = noteService.getPosts()
    
    const handlerEvent = data => {
      console.log('promise fulfilled')
      setLoad(false)
      setNotes(data)
    }

    dataPosts.then(handlerEvent)
  }, [])

  console.log('render', notes.length, 'notes')

  const handlerSubmitNotes = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNotes,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    noteService.postData(noteObject).then((resp) => console.log("succesfuly", resp))
  
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

      <ShowNote show={showAll} handlerClick={() => setShowAll(!showAll)} />

      <FormNote submitNotes={handlerSubmitNotes} changeNotes={handlerChangeNotes} newN={newNotes} />

      { load ? 'Cargando...' : '' }

      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />          
        )}
      </ul>

    </div>
  )
};

export default App;
