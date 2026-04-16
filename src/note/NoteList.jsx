import Note from "../note/Note";

export default function NoteList({ notes, onChange, onDelete }) {
  return (
    <ul>
      {/* melakukan looping dari object notes */}
      {notes.map((note) => (
        <li key={note.id}>
          <Note note={note} onChange={onChange} onDelete={onDelete}></Note>
        </li>
      ))}
    </ul>
  );
}
