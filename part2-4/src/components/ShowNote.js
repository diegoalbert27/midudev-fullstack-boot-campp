export const ShowNote = ({ show, handlerClick }) => {
    return (
        <div>
            <button onClick={handlerClick}>
                show {show ? 'important' : 'all' }
            </button>
        </div>
    )
}