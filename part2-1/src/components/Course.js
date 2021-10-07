import { Total } from "./Total"

export const Course = ({ course }) => {
  return (
    <article className="App">
      <header>
        <h1>{course.name}</h1>
      </header>
      <ul>
        {course.parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
      <Total parts={course.parts} />     
    </article>
  );
};
