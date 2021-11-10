import "./App.css";

import { Note } from "./components/Note";
import { ShowNote } from "./components/ShowNote"
import { FormNote } from "./components/FormNote";

import { useState, useEffect } from "react";
import noteService from "./services/notes";

const NoteApp = () => {
  const [notes, setNotes] = useState([])
  const [newNotes, setNewNotes] = useState('')
  const [load, setLoad] = useState(true)
  const [showAll, setShowAll] = useState(true)

  const getData = () => {
    console.log('effect')
    const dataPosts = noteService.getPosts()
    
    const handlerEvent = data => {
      console.log('promise fulfilled')
      setLoad(false)
      setNotes(data)
    }

    dataPosts.then(handlerEvent)
  }

  useEffect(getData, [])

  console.log('render', notes.length, 'notes')

  const handlerSubmitNotes = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNotes,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }

    noteService.postData(noteObject).then((resp) => {
      console.log("succesfuly", resp)
      getData()
    })
  
    setNewNotes('')
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    setLoad(true)
    
    noteService.updateData(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
        setLoad(false)
      })
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
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />          
        )}
      </ul>
    </div>
  )
};

export default NoteApp;
