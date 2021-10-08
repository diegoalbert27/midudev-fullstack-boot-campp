import "./App.css";
import { useState } from "react";
import { Note } from "./components/Note";

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '0412-134-5643' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]) 
  
  const [ newPerson, setNewPerson ] = useState({
    name: '', phone: ''
  })

  const [ personsFilter, setPersonsFilter ] = useState([])   
  const [ filter, setFilter ] = useState('');

  const [ showList, setShowList ] = useState(true);

  const handlerSubmitPerson = (e) => {
    e.preventDefault();
    
    const isPersons = persons
      .map(person => person.name)
      .includes(newPerson.name)

    isPersons ? alert(`${newPerson.name} is already added to phonebook`) : addNewPerson();
  } 

  const addNewPerson = () => {
    const objectPerson = {
      name: newPerson.name,
      phone: newPerson.phone
    }
    setPersons(persons.concat(objectPerson))
    setNewPerson({
      name: '', phone: ''
    });
  }

  const handlerChangeName = e => setNewPerson({
    ...newPerson,
    name: e.target.value
  })
  
  const handlerChangePhone = e => setNewPerson({
    ...newPerson,
    phone: e.target.value
  })

  const handlerChangeFilter = e => {
    setFilter(e.target.value)
    const personsFilter = persons.filter(person => person.name.includes(e.target.value))
    setPersonsFilter(personsFilter)

    e.target.value ? setShowList(false) : setShowList(true)
  }

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input onChange={handlerChangeFilter} value={filter} />
      </div>
      <form onSubmit={handlerSubmitPerson}>
        <div>
          name: <input onChange={handlerChangeName} value={newPerson.name} />
          phone: <input onChange={handlerChangePhone} value={newPerson.phone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {showList ? 
        persons.map(person => <Note key={person.name} note={person} />) : 
        personsFilter.map(person => <Note key={person.name} note={person} />)
      }
    </div>
  )
};

export default App;
