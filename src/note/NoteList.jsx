import { useContext } from "react";
import Note from "../note/Note";
import { NotesContext } from "./NoteContext";

// function component NoteList sebelum menggunakan props
// export default function NoteList({ notes, onChange, onDelete }) {
//   return (
//     <ul>
//       {/* melakukan looping dari object notes */}
//       {notes.map((note) => (
//         <li key={note.id}>
//           <Note note={note} onChange={onChange} onDelete={onDelete}></Note>
//         </li>
//       ))}
//     </ul>
//   );
// }

// function component NoteList setelah menggunakan context
export default function NoteList() {
  // mengambil data notes menggunakan context
  const notes = useContext(NotesContext);

  return (
    <ul>
      {/* melakukan looping dari object notes */}
      {notes.map((note) => (
        <li key={note.id}>
          <Note note={note}></Note>
        </li>
      ))}
    </ul>
  );
}
