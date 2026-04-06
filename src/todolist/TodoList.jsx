// import komponen logic todo
import Todo from "./Todo.jsx";

// penggunaan todolist, pada main.jsx (milik hello-world)

// cara 1 : data di tambahkan melalui property todo (manual)
// export default function TodoList() {
//   return (
//     <ul>
//       {/* panggil komponen todo */}
//       <Todo isCompleted={true} text="Learn HTML" isDeleted={true} />
//       <Todo isCompleted={true} text="Learn CSS" />
//       <Todo isCompleted={true} text="Learn JavaScript" />
//       <Todo isCompleted={false} text="Learn React JS" />
//     </ul>
//   );
// }

// cara 2 : data ditambahkan ke dalam array (manual)
export default function TodoList() {
  const data = [
    {
      id: 0,
      text: "Learn HTML",
      isCompleted: true,
      isDeleted: true,
    },
    {
      id: 1,
      text: "Learn HTML",
      isCompleted: true,
      isDeleted: false,
    },
    {
      id: 2,
      text: "Learn JavaScript",
      isCompleted: true,
      isDeleted: false,
    },
    {
      id: 3,
      text: "Learn React JS",
      isCompleted: false,
      isDeleted: false,
    },
  ];

  // // melakukan konversi data array ke dalam bentuk komponen (todo)
  // const todos = data.map((todo) => {
  //   // konversi ke dalam bentuk komponen (dengan menambahkan attribute, satu persatu)
  //   // <Todo text={todo.text} isCompleted={todo.isCompleted} isDeleted={todo.isDeleted} />;

  //   // konversi ke dalam bentuk komponen menggunakan metode spread operator (harus sama nama attributenya)
  //   // jangan lupa tambahkan id, sebagai key untuk penanda dari setiap data/komponen
  //   return <Todo key={todo.id} {...todo} />;
  // });

  return (
    <ul>
      {/* array yang sudah dikonversi ke bentuk komponen, bisa ditampilkan di sini */}
      {/* ini adalah cara yang sederhana untuk pembelajaran */}
      {/* {todos} */}

      {/* alangkah baiknya data yang sudah dikonversi, kita tampilkan ke dalam map seperti ini */}
      {/* kalau menggunakan cara seperti ini, maka tidak perlu lagi dilakukan konversi ke variabel todos */}
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
