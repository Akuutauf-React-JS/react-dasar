import { useState } from "react";

// membuat function dengan props
export default function TaskForm({ onSubmit }) {
  // menyiapkan variabel
  const [item, setItem] = useState(""); // untuk item data yang mau ditambahkan

  // membuat function event handler
  // yang menangani ketika ada input yang berubah
  function handleChange(e) {
    setItem(e.target.value); // mengambil value dari input
  }

  // membuat function event handler
  // untuk menambahkan data yang baru ke dalam array pada state
  function handleClick(e) {
    e.preventDefault(); // mencegah ketika tombol diklik, agar tidak melakukan submit

    // item yang disubmit pada input nantinya akan dikirimkan ke Component TaskList melalui props
    onSubmit(item);

    // kemudian ubah setItem yang digunakan untuk mengambil data dari input sebelumnya menjadi kosong
    setItem("");
  }

  return (
    <div>
      <h1>Create Task</h1>

      <form action="">
        {/* mengisikan value dari item */}
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}
