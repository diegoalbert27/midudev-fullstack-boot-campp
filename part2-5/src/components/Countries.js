import { Country } from "./Country"

export const Countries = ({ countryList, setCountry }) => {

    const handlerClick = name => () => setCountry(name)

    return (
        <div>
            {
                countryList.length === 1 ? 
                countryList.map((countryMap, i) => <Country key={i} country={countryMap} />) :
                countryList.map((countryMap, i) => 
                    <li key={i}>{countryMap.name}
                    <button onClick={handlerClick(countryMap.name)} >Show</button>
                    </li>
                )
            }
        </div>
    )
}