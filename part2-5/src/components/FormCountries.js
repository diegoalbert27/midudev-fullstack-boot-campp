export const FormCountries = ({ searchCountry, country }) => {
    const handlerChange = (e) => {
        searchCountry(e.target.value)
    }

    return (
        <form>
            <label htmlFor="inputCountry">Find Countries: </label>
            <input id="inputCountry" onChange={handlerChange} value={country} />
        </form>
    )
}