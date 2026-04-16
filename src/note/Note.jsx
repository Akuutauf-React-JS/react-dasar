import { useState } from "react";

// membuat component dengan props
// props note adalah object

export default function Note({ note, onChange, onDelete }) {
  // menyiapkan variabel
  // isEditing digunakan untuk menyimpan nilai editing (lagi ngedit/tidak)
  // setIsEditing sebagai function untuk melakukan perubahan nilai dari isEditing
  const [isEditing, setIsEditing] = useState(false);

  // digunakan untuk menyimpan tampilan dari beberapa compoent (lagi edit/tidak)
  let component;

  // membuat event handler
  function handleChangeText(e) {
    // salin semua data state, namun text nya custom (diambil dari input user)
    const newNote = { ...note, text: e.target.value }; // menggunakan spread operator
    onChange(newNote); // mengirimkan object note terbaru
  }

  // mengecek apakah masih dalam tahapan edit
  if (isEditing) {
    // akan mengembalikan komponen yang lagi di edit
    component = (
      <>
        <input type="text" value={note.text} onChange={handleChangeText} />

        {/* untuk mematikan menu editing */}
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    // akan menampilkan komponen yang tidak lagi di edit
    component = (
      <>
        {note.text}

        {/* untuk mengaktifkan menu editing */}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  // membuat event handler untuk menyelesaikan note
  function handleChangeDone(e) {
    // copy semua data note, terkecuali done nya di isi sebagai checked (true)
    const newNote = { ...note, done: e.target.checked };
    onChange(newNote); // mengirimkan object note terbaru
  }

  return (
    <label htmlFor="">
      {/* done adalah attribute baru yang khusus ditambahkan ketika operasi handleChangeDone dilakukan */}
      <input type="checkbox" checked={note.done} onChange={handleChangeDone} />

      {/* menampilkan yang terus berubah ubah (lagi editing/tidak) */}
      {component}

      {/* akan menghapus catatan yang sudah ada */}
      <button onClick={() => onDelete(note)}>Delete</button>
    </label>
  );
}
