export const Phonebook = ({ phonebook }) => {
  return (
    <li>
      {phonebook.id}
      <p>{phonebook.name}</p>
      <p>{phonebook.number}</p>
    </li>
  );
};