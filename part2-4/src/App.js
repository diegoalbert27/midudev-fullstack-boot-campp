import "./App.css";

import { Note } from "./components/Note";
import { FormNote } from "./components/FormNote";

import { useState, useEffect } from "react";
import { getPosts, postData } from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNotes, setNewNotes] = useState('')
  const [load, setLoad] = useState(true)

  useEffect(() => {
    console.log('effect')
    const dataPosts = getPosts()
    
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
      title: newNotes,
      body: newNotes,
      id: notes.length + 1,
      userId: 1
    }

    postData(noteObject).then((resp) => console.log("succesfuly", resp))
  
    setNotes(notes.concat(noteObject))
    setNewNotes('')
  }

  const handlerChangeNotes = (e) => setNewNotes(e.target.value)
  
  return (
    <div className="App">
      <h1>Notes</h1>

      <FormNote submitNotes={handlerSubmitNotes} changeNotes={handlerChangeNotes} newN={newNotes} />

      { load ? 'Cargando...' : '' }

      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />          
        )}
      </ul>

    </div>
  )
};

export default App;
