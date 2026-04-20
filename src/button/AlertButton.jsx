// function alert button tanpa ref
// // implementasi alert button ada di file main (milik hello world)
// export default function AlertButton({ text, message = "Hai" }) {
//   // membuat function event handler di dalam komponen AlertButton
//   // menambahkan event object sebagai parameter di event handler (e)
//   function handleClick(e) {
//     alert(message);

import { useRef } from "react";

//     // e.target digunakan untuk mengambil komponen yang baru saja dilakukan aksi (button)
//     console.info(e.target);
//   }

//   return <button onClick={handleClick}>{text}</button>;
// }

// function alert button dengan menggunaakn ref
// implementasi alert button ada di file main (milik hello world)
export default function AlertButton({ text, message}) {
  // menyiapkan counter dengan ref, dengan default value adalah 0
  // kalau menggunakan ref, ada attribute current yang kita bisa manfaatkan untuk merubah nilainya-
  // tanpa merender halaman saat ini 
  const counter = useRef(0)

  // menambahkan event object sebagai parameter di event handler (e)
  function handleClick(e) {
    // menampilkan counter hanya di alert browser (tanpa melakukan render)
    alert(`${message} ${counter.current++}`);

    // e.target digunakan untuk mengambil komponen yang baru saja dilakukan aksi (button)
    console.info(e.target);
  }

  // tanpa merender halaman, karena value current diubah dengan menggunakan ref bukan state
  return <button onClick={handleClick}>{text}</button>;
}
