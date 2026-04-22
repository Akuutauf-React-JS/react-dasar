import { useContext, useMemo, useRef, useState } from "react";
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
// export default function NoteList() {
//   // mengambil data notes menggunakan context
//   const notes = useContext(NotesContext);

//   return (
//     <ul>
//       {/* melakukan looping dari object notes */}
//       {notes.map((note) => (
//         <li key={note.id}>
//           <Note note={note}></Note>
//         </li>
//       ))}
//     </ul>
//   );
// }

// function component NoteList yang mengimplementasikan context, ref, dan memo
export default function NoteList() {
  // mengambil data notes menggunakan context
  const notes = useContext(NotesContext);

  // menyiapkan data untuk menerima input dari pengguna
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  // melakukan filtering untuk hasil pencarian
  // dengan menggunakan useMemo, maka jika user mencari data yang sama, maka tidak dilakukan proses kalkulasi berulang
  const filteredNotes = useMemo(() => {
    // menampilkan log
    console.log("Filtering notes");

    // mengembalikan data note yang terdapat kata (text) sesuai dengan yang dicari
    return notes.filter((note) => note.text.includes(search));

    // useMemo akan ditrigger ulang, kalau semisal data notes, dan search berubah
  }, [notes, search]);

  // membuat event handler untuk search button
  function handleSearch() {
    // menampilkan log keyoward yang ingin dicari ke browser
    console.info("Search: ", searchInput.current.value);

    // mengisikan keywoard dari form input ke search
    setSearch(searchInput.current.value);
  }

  return (
    <div>
      {/* implementasi search dengan memo */}
      <input type="text" ref={searchInput} placeholder="Search" />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {/* melakukan looping dari object filterred notes */}
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <Note note={note}></Note>
          </li>
        ))}
      </ul>
    </div>
  );
}
