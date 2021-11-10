import "./App.css";
import { useState, useEffect } from "react";

import { FormPhonebook } from "./components/FormPhonebook";
import { Phonebook } from "./components/Phonebook";

import phonebookService from "./services/phonebook";

const PhonebookApp = () => {
  const [phonebook, setPhonebook] = useState([]);
  const [load, setLoad] = useState(true);
  const [newPerson, setNewPerson] = useState({
    nombre: "",
    telefono: "",
  });

  const getData = () => {
    console.log("effect");
    const dataPosts = phonebookService.getPosts();

    const handlerEvent = (data) => {
      console.log("promise fulfilled");
      setLoad(false);
      setPhonebook(data);
    };

    dataPosts.then(handlerEvent);
  };

  useEffect(getData, []);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const phoneObject = {
      name: newPerson.nombre,
      number: newPerson.telefono,
    };

    console.log(phoneObject);

    const person = phonebook.find((person) => person.name === newPerson.nombre);

    const postPerson = (phone) => {
      phonebookService.postData(phone).then((resp) => {
        console.log("succesfuly", resp);
        getData();
      });
    };

    const updatePerson = (person, object) => {
      phonebookService.updateData(person.id, object)
        .then(resp => {
            console.log("successfuly", resp)
            getData()
        })
    };

    if (person === undefined) {
        postPerson(phoneObject)
    } else {
        updatePerson(person, phoneObject)
    }

    setNewPerson({
        nombre: "",
        telefono: ""
    });
  };

  const handlerObject = {
    handlerChangeName: (e) =>
      setNewPerson({
        ...newPerson,
        nombre: e.target.value,
      }),
    handlerChangePhone: (e) =>
      setNewPerson({
        ...newPerson,
        telefono: e.target.value,
      }),
  };

  return (
    <div className="App">
      <h1>PhoneBook</h1>

      <FormPhonebook
        submitHandler={handlerSubmit}
        changePhone={handlerObject}
        newPerson={newPerson}
      />

      {load ? "Cargando..." : ""}

      {phonebook.map((phone) => (
        <Phonebook key={phone.id} phonebook={phone} />
      ))}
    </div>
  );
};

export default PhonebookApp;
