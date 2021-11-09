import "./App.css";
import NoteApp from './NoteApp';
import PhonebookApp from "./PhonebookApp";
import { useState } from 'react';

const App = () => {
  const [ showApp, setShowApp ] = useState(true)

  const handlerClickPhonebook = (e) => setShowApp(false);
  const handlerClickNote = (e) => setShowApp(true);

  return (
    <div className="App">
      <button onClick={handlerClickNote}>
        Click NoteApp
      </button>
      <button onClick={handlerClickPhonebook}>
        Click PhonebookApp
      </button>

      <div>
        {
          showApp ? <NoteApp/> : <PhonebookApp/>
        }
      </div>

    </div>
  )
}

export default App;
