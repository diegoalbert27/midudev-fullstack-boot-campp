import "./App.css";
import { useState, useEffect } from "react";

import { FormPhonebook } from './components/FormPhonebook'
import { Phonebook } from './components/Phonebook'

import phonebookService from "./services/phonebook";

const PhonebookApp = () => {
    const [phonebook, setPhonebook] = useState([])
    const [load, setLoad] = useState(true)
    const [newPerson, setNewPerson] = useState({
        nombre: '',
        telefono: ''
    })

    useEffect(() => {
        console.log('effect')
        const dataPosts = phonebookService.getPosts()
        
        const handlerEvent = data => {
          console.log('promise fulfilled')
          setLoad(false)
          setPhonebook(data)
        }
    
        dataPosts.then(handlerEvent)
    }, [])

    const handlerSubmit = (e) => {
        e.preventDefault();
        const noteObject = {
            nombre: newPerson.nombre,
            telefono: newPerson.telefono
        }

        phonebookService.postData(noteObject).then((resp) => console.log("succesfuly", resp))
    
        setNewPerson('')
    }

    const handlerObject = {
        handlerChangeName: (e) => setNewPerson({
            ...newPerson,
            nombre: e.target.value
        }),
        handlerChangePhone: (e) => setNewPerson({
            ...newPerson,
            telefono: e.target.value
        })
    }

    return (
        <div className="App">
            <h1>PhoneBook</h1>

            <FormPhonebook submitHandler={handlerSubmit} changePhone={handlerObject} newPerson={newPerson} />

            { load ? 'Cargando...' : '' }

            {phonebook.map(phone => <Phonebook key={phone.id} phonebook={phone} />)}
        </div>
    )
}

export default PhonebookApp
