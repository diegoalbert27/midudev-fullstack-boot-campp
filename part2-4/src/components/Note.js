export const Note = ({ note, toggleImportance }) => {
    const label = note.important ? "Do make no important?" : "Do make important?"

  return (
    <li>
      {note.id}. {note.content}
      <p>{note.date}</p>
      <p>{note.number}</p>
      <button onClick={toggleImportance}>
        {label}
      </button>
    </li>
  );
};
