export const FormPhonebook = ({ newPerson, changePhone, submitHandler }) => {
    return (
        <form onSubmit={submitHandler}>
            <label>Nombre: </label>
            <input onChange={changePhone.handlerChangeName} value={newPerson.nombre} />
            <br/>
            <label>Telefono: </label>
            <input onChange={changePhone.handlerChangePhone} name="telefono" value={newPerson.telefono} />
            <br/>
            <button type="submit" >Guardar</button>
        </form>
    )
}