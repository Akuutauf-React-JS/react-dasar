import { useState } from "react";

export default function Counter({ name }) {
  // menyiapkan variabel
  // menggunakan const, karena distate tidak diperbolehkan untuk mengubah isi dari data state
  const [count, setCount] = useState(0);

  // membuat event handler
  function handleClick() {
    // melakukan increment
    setCount(count + 1);
  }

  return (
    <div>
      {/* menampilkan hasil count */}
      <h1>
        Counter {name} : {count}
      </h1>

      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
