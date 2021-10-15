import "./App.css";
import { useState, useEffect } from "react"

import { FormCountries } from "./components/FormCountries"
import { Countries } from "./components/Countries";

import { getCountries } from "./services/countries";

const App = () => {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [loadCountries, setLoadCountries] = useState(true)

  useEffect(() => {
    getCountries()
      .then(initialCountries => {
        setCountries(initialCountries)
        setLoadCountries(false)
      })
  }, [])

  const searchCountry = countries
    .filter(countryFilter => countryFilter
      .name
      .toLowerCase()
      .includes(country
        .toLowerCase()))

  const message = country ? 'Too many matches, specify another filter' : ''
  
  return (
    <div className="App">
      <FormCountries searchCountry={setCountry} country={country} />

      { loadCountries ? 'Cargando...' : '' }

      {
        searchCountry.length > 10 ? message : <Countries setCountry={setCountry} countryList={searchCountry} />
      }

    </div>
  )
};

export default App;
