// implementasi component button counter pada file main (milik hello world)

import { useState } from "react";

// // contoh yang keliru : menggunakan local variabel untuk render
// export default function Counter() {
//   // membuat local variabel, yang mana nantinya component yang dirender tidak akan bisa ditampilkan ulang,
//   // jika terdapat perubahan/interaksi yang dilakukan oleh pengguna
//   let counter = 0;

//   // membuat handler function untuk button
//   function handleClick() {
//     counter++;
//     console.log(counter); // untuk debugging
//   }

//   return (
//     <div>
//       {/* meskipun tombol ditekan oleh user, maka perubahan render di h1, tidak akan ditampilkan */}
//       {/* karena counter menggunakan local variabel, yang mana seharusnya menggunakan State */}
//       {/* juga karena component akan selalu dibaca ulang setiap kali melakukan render- */}
//       {/* sehingga akan tetap membaca nilai 0 pada counter (local variabel) */}
//       <button onClick={handleClick}>Increment</button>

//       <h1>Counter : {counter}</h1>
//     </div>
//   );
// }

// contoh yang benar : menggunakan state variabel untuk render
export default function Counter() {
  // membuat state
  // counter sebagai variabel milik state
  // dan setCounter sebagai function state
  // 0 adalah nilai default nya
  let [counter, setCounter] = useState(0);

  // debugging render di console
  // setiap sekali ditampilkan, maka akan merender sebanyak 2 kali, karena menggunakan strictmode di main (hello world)
  // menampilkan counter sebelum di render
  console.log(`Render Counter = ${counter}`);

  // membuat handler function untuk button
  function handleClick() {
    // counter++; // tidak lagi menggunaakn counter++ untuk render dan increment

    // cukup gunakan setCounter
    // render akan dilakukan setelah perubahan state dengan setCounter
    // setCounter(counter + 1); // setCounter(0 + 1)

    // jika ingi menaikkan counter sekali trigger, maka cukup gunakan satu state seperti ini
    // setCounter(counter + 3); // setCounter(0 + 3)

    // implementasi state
    // jika menggunakan state updates, maka kita bisa ubah nilai state sebelum proses rendering di commit
    // karena kita melakukan perubahan di dalam value milik state nya itu sendiri
    // menggunakan tehnik lambda, closure dan function arrow
    setCounter((c) => c + 1); // setCounter(0 + 1)
    setCounter((c) => c + 1); // setCounter(0 + 1)
    setCounter((c) => c + 1); // setCounter(0 + 1)

    // jika kita melakukan perubahan state berkali-kali, maka react hanya tetap akan merender 1x
    // jadi, meskipun kita lakukan counter 3x (perubahan state) di sini, maka yang terbaca counter++ hanya 1x,-
    // karena nilai yang baru harus di render dan commmit ke DOM, baru kemudian akan di render ulang sesuai dengan trigger pengguna
    // react hanya menerima satu perubahan state
    // setCounter(counter + 1); // setCounter(0 + 1)
    // setCounter(counter + 1); // setCounter(0 + 1)
    console.log(counter); // untuk debugging

    // proses counter dalam state akan dibaca nilai awal, misal 0
    // kemudian jika terjadi perubahan distate, sebenanrya nilai counter masih 0, meskipun kita lakukan counter++
    // sehingga react akan menunggu proses event handler selesai. barulah melakukan rendering dan menyimpan nilai baru di state (counter = 1)
    // snapshot : setiap render ulang data state nya bersifat immutable/tidak akan berubah (snapshot)
  }

  return (
    <div>
      {/* jika menggunakan state, maka secara otomatis ketika value dari counter berubah,- */}
      {/* maka value di h1 pun ikut berubah */}
      <button onClick={handleClick}>Increment</button>

      <h1>Counter : {counter}</h1>
    </div>
  );
}
