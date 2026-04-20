import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

// function component NoteForm tanpa context
// export default function NoteForm({ onAddNote }) {
//   // menyiapkan variabel
//   // text sebagai wadah untuk value baru
//   // setText sebagai tempat menyimpan value dari text (state)
//   // dan useState nya / nilai default text nya adalah "" (string kosong)
//   const [text, setText] = useState("");

//   // membuat event handler
//   function handleChange(e) {
//     // mengambil text yang diperoleh dari input pengguna
//     setText(e.target.value);
//   }

//   function handleClick() {
//     // mengubah ke nilai awal untuk setText
//     setText("");

//     // dan menambahkan text dari input user ke props
//     onAddNote(text); // menggunakan snapshot, sehingga setText tidak akan tereset
//   }

//   return (
//     <>
//       <input type="text" placeholder="Add Note" onChange={handleChange} value={text} />
//       <button onClick={handleClick}>Add</button>
//     </>
//   );
// }

// function component NoteForm dengan context
// karena menggunakan context, maka tidak perlu lagi untuk mendefinisikan method dispatch nya melalui props
export default function NoteForm() {
  // menyiapkan variabel
  // text sebagai wadah untuk value baru
  // setText sebagai tempat menyimpan value dari text (state)
  // dan useState nya / nilai default text nya adalah "" (string kosong)
  const [text, setText] = useState("");

  // mengunakan method dispatch
  const dispatch = useContext(NotesDispatchContext);

  // membuat event handler
  function handleChange(e) {
    // mengambil text yang diperoleh dari input pengguna
    setText(e.target.value);
  }

  function handleClick() {
    // mengubah ke nilai awal untuk setText
    setText("");

    // tidak perlu pakai onAddNote lagi
    // dan menambahkan text dari input user ke props
    // onAddNote(text); // menggunakan snapshot, sehingga setText tidak akan tereset

    // kita cukup gunakan dispatch yang sudah didaftarkan pada NoteContext
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
  }

  return (
    <>
      <input type="text" placeholder="Add Note" onChange={handleChange} value={text} />
      <button onClick={handleClick}>Add</button>
    </>
  );
}
