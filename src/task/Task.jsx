// import { useState } from "react";
import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

// cara 1 : menjadikan satu untuk komponen form dan list task nya
// export default function Task() {
//   // menyiapkan variabel
//   const [item, setItem] = useState(""); // untuk item data yang mau ditambahkan
//   const [items, setItems] = useImmer([]); // untuk list array data yang sudah ditambahkan

//   // membuat function event handler
//   // yang menangani ketika ada input yang berubah
//   function handleChange(e) {
//     setItem(e.target.value); // mengambil value dari input
//   }

//   // membuat function event handler
//   // untuk menambahkan data yang baru ke dalam array pada state
//   function handleClick(e) {
//     e.preventDefault(); // mencegah ketika tombol diklik, agar tidak melakukan submit
//     setItems((draft) => {
//       // array yang sekarang (copyan nya), akan ditambahkan data baru (push)
//       draft.push(item); // data yang baru nya adalah item
//     });

//     // kemudian ubah setItem yang digunakan untuk mengambil data dari input sebelumnya menjadi kosong
//     setItem("");
//   }

//   return (
//     <div>
//       <h1>Create Task</h1>

//       <form action="">
//         {/* mengisikan value dari item */}
//         <input type="text" value={item} onChange={handleChange} />
//         <button onClick={handleClick}>Add</button>
//       </form>

//       <h1>List Task</h1>

//       <ul>
//         {/* melakukan perulangan ke list menggunakan map */}
//         {/* tanpa menggunakan kurung kurawal lagi pada function arrow, agar bisa langsung direturn */}
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// cara 2 : membuat 2 component untuk task form dan list form (sharing state)
export default function Task() {
  // menyiapkan variabel
  const [items, setItems] = useImmer([]); // untuk list array data yang sudah ditambahkan

  // membuat function event handler
  // yang menangani ketika ada input yang berubah
  // item di sini diambil dari onSubmit(item) (pada file task form)
  function handleOnSubmit(item) {
    setItems((draft) => {
      // array yang sekarang (copyan nya), akan ditambahkan data baru (push) menggunakan item
      draft.push(item); // data yang baru nya adalah item
    });
  }

  return (
    <div>
      {/* menambahkan komponen TaskForm */}
      {/* task form membutuhkan props onSubmit */}
      <TaskForm onSubmit={handleOnSubmit}></TaskForm>

      {/* menambahkan komponen TaskList */}
      {/* task list membutuhkan props items */}
      <TaskList items={items}></TaskList>
    </div>
  );
}
