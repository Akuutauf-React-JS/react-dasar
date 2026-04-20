// import { useImmer } from "use-immer";
// import { useReducer } from "react";
import { useImmerReducer } from "use-immer";
import NoteForm from "../note/NoteForm";
import NoteList from "../note/NoteList";
import { NotesDispatchContext } from "./NoteContext";
import { NotesContext } from "./NoteContext";

// menyiapkan daftar notes secara manual (sebagai contoh)
let id = 0; // untuk key dari data notes
const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: true },
  { id: id++, text: "Learn JavaScript", done: false },
  { id: id++, text: "Learn React", done: false },
];

// function component NoteApp sebelum menggunakan reducer
// export default function NoteApp() {
//   // menyiapkan variable
//   const [notes, setNotes] = useImmer(initialNotes);

//   // membuat event handler
//   function handleAddNote(text) {
//     // mengubah catatan dengan mengcopy dari draft (initialNotes), dan menambahkan catatan baru
//     setNotes((draft) => {
//       // implementasi useImmer (duplikasi dan tambah dalam satu waktu)
//       draft.push({
//         id: id++,
//         text: text,
//         done: false,
//       });
//     });
//   }

//   function handleChangeNote(note) {
//     setNotes((draft) => {
//       // mencari dan mencocokkan data index / id, apakah sudah sesuai dengan data note yang akan diubah
//       const index = draft.findIndex((item) => item.id === note.id);
//       draft[index] = note; // kalau ketemu mengubah data catatan lama
//     });
//   }

//   function handleDeleteNote(note) {
//     setNotes((draft) => {
//       // mencari dan mencocokkan data index / id, apakah sudah sesuai dengan data note yang akan diubah
//       const index = draft.findIndex((item) => item.id === note.id);

//       // kalau ketemu menghapus data array dari mulai 'index' yang ditentukan hingga sejumlah 1 data
//       // (hanya index yang ditentukan akan dihapus)
//       draft.splice(index, 1);
//     });
//   }

// membuat function reducer (yang menampung semua logic, add, update dan delete)
// function notesReducer(notes, action) {
//   // menggunakan pengecekan switch
//   // akan mengecek tipe dari aksi yang dilakukan oleh pengguna
//   switch (action.type) {
//     case "ADD_NOTE":
//       // kalau operasi add, akan me-return notes lama (di duplikasi), dan menambahkan data note baru
//       return [
//         ...notes,
//         {
//           id: id++,
//           text: action.text,
//           done: action.done,
//         },
//       ];
//     case "CHANGE_NOTE":
//       // kalau operasi update, mencocokan id notes, jika cocok update data yang dibutuhkan, jika tidak return data notes
//       return notes.map((note) => (note.id === action.id ? { ...notes, text: action.text, done: action.done } : note));
//     case "DELETE_NOTE":
//       // kalau delete, maka akan memfilter data yang ditampilkan hanyalah id data yang tidak pernah melakukan aksi delete
//       return notes.filter((note) => note.id !== action.id);
//     default:
//       // kalau tidak ada operasi selain 3 diatas, maka akan return data notes
//       return notes;
//   }
// }

// reducer juga bisa menggunakan useImmer, dengan mengganti parameter 'notes' menjadi draft
// juga nanti di operasi setiap aksi nya hanya tingggal melakukan push, edit, dan splice-
// (seperi pada event handler di NoteApp manual)
function notesReducer(draft, action) {
  // jikalau menggunakan useImmer, maka pengkondisiannya menggunakan if
  // akan mengecek tipe dari aksi yang dilakukan oleh pengguna
  if (action.type === "ADD_NOTE") {
    // tinggal menambahkan data baru menggunakan push
    draft.push({
      id: id++,
      text: action.text,
      done: false,
    });
  } else if (action.type === "CHANGE_NOTE") {
    // mencari dan mencocokkan data berdasarkan index
    const index = draft.findIndex((note) => note.id === action.id);

    // kalau sama id nya, maka data akan di ubah
    draft[index].text = action.text;
    draft[index].done = action.done;
  } else if (action.type === "DELETE_NOTE") {
    // mencari dan mencocokkan data berdasarkan index
    const index = draft.findIndex((note) => note.id === action.id);
    draft.splice(index, 1); // menghapus data berdasarkan index
  }
}

// function component NoteApp setelah mengunakan reducer
// namun masih belum menerapkan context
// export default function NoteApp() {
//   // kita menggunakan useReducer, tidak lagi menggunakan useImmer, maupun useState
//   // useReducer memiliki 2 parameter, function reducer, dan data awal (initialNotes)

//   // menyiapkan variabel yang dibutuhkan
//   // dispatch digunakan sebagai pengganti operasi, yang menghubungkan component ke function reducer
//   // const [notes, dispatch] = useReducer(notesReducer, initialNotes); // jikalau ingin menggunakan reducer pure
//   const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes); // jikalau ingin menggunakan reducer dengan immer

//   // membuat event handler yang digunakan untuk mengirimkan expression ke function reducer
//   function handleAddNote(text) {
//     dispatch({
//       // dispatch digunakan sebagai pengganti
//       type: "ADD_NOTE",
//       text: text,
//     });
//   }

//   function handleChangeNote(note) {
//     dispatch({
//       ...note, // bisa juga menggunakan spread syntax
//       type: "CHANGE_NOTE",
//     });
//   }

//   function handleDeleteNote(note) {
//     dispatch({
//       type: "DELETE_NOTE",
//       id: note.id,
//     });
//   }

//   return (
//     <div>
//       <h1>Note App</h1>

//       {/* akan membuka menu / tampilan menambahkan note baru */}
//       <NoteForm onAddNote={handleAddNote}></NoteForm>

//       {/* menampilkan list, dan aksi yang bisa dilakukan (edit/hapus) */}
//       <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote}></NoteList>
//     </div>
//   );
// }

// function component NoteApp setelah mengunakan reducer dan context
export default function NoteApp() {
  // jikalau ingin menggunakan reducer dengan immer
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  // dispatch bisa langsung menggunakan context
  // membuat event handler yang digunakan untuk mengirimkan expression ke function reducer
  // function handleAddNote(text) {
  //   dispatch({
  //     // dispatch digunakan sebagai pengganti
  //     type: "ADD_NOTE",
  //     text: text,
  //   });
  // }

  // function handleChangeNote(note) {
  //   dispatch({
  //     ...note, // bisa juga menggunakan spread syntax
  //     type: "CHANGE_NOTE",
  //   });
  // }

  // function handleDeleteNote(note) {
  //   dispatch({
  //     type: "DELETE_NOTE",
  //     id: note.id,
  //   });
  // }

  return (
    <div>
      {/* imeplementasi context untuk notes */}
      <NotesContext.Provider value={notes}>
        {/* implementasi context untuk dispatch/fungsional */}
        <NotesDispatchContext.Provider value={dispatch}>
          <h1>Note App</h1>

          {/* setelah mendefinisikan context untuk notes dan dispatch, komponent dibawah nya- */}
          {/* tidak perlu lagi mendefinisikan props, karena bisa langsung digunakan dengan useContext- */}
          {/* pada masing masing component */}

          {/* akan membuka menu / tampilan menambahkan note baru */}
          <NoteForm></NoteForm>

          {/* menampilkan list, dan aksi yang bisa dilakukan (edit/hapus) */}
          <NoteList></NoteList>
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </div>
  );
}
