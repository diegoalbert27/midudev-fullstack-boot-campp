export const Note = ({ note }) => 
    <li>
        <h3>{note.id}. {note.content}</h3>
        <p>{note.date}</p>
        <p>{note.number}</p>
    </li>