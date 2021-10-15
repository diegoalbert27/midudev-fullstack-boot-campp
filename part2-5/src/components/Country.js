export const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital {country.capital}</p>
            <p>Populaton {country.population}</p>
            <p>Region {country.region}</p>

            <h3>languages</h3>

            <ul>
                {
                    country.languages.map((language, i) => <li key={i} >{language.name}</li>)
                }
            </ul>

            <div>
                <img src={country.flag}  alt={'Flags ' + country.name} width="600" height="400" />
            </div>
        </div>
    )
}