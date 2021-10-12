export const FormNote = ({ newN, submitNotes, changeNotes }) => {
    return (
        <form onSubmit={submitNotes} >
            <input onChange={changeNotes} value={newN} />
            <button type="submit">save</button>
        </form>
    )
}