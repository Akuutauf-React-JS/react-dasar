import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  // menyiapkan variabel
  const [show2, setShow2] = useState(true);

  // membuat function event handler
  function handleChange(e) {
    setShow2(e.target.checked); // digunakan untuk mengambil nilai checked (true/false) dari input
  }

  return (
    // cara 1 : ketika component yang sama di posisi yang berbeda salah satunya hilang, maka data state akan 0
    // <div>
    //   {/* counter pertama */}
    //   <Counter name={"Taufik"}></Counter>
    //   {/* counter kedua menggunakan hidden */}
    //   {/* jika ingin ditampilkan maka show2 harus bernilai 'true' */}
    //   {show2 && <Counter name={"Ilham"}></Counter>}
    //   <br />
    //   {/* melakukan aksi, pada input checkbox, jika ingin menampilkan counter 2 */}
    //   {/* ketika counter 2 hilang, dan ditampilkan kembali. maka state sebelumnya akan menghasilkan counter 0 */}
    //   {/* karena kita hapus component 2 nya dari DOM (hidden), maka nilai state nya akan di hapus juga dari react */}
    //   <input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan Counter 2
    // </div>

    // cara 2 : ketika component yang sama di posisi yang sama, salah satunya hilang, maka data state akan di simpan (data state sama untuk kedua component)
    // <div>
    //   {/* karena kedua component posisi nya sama persis, maka jikalau salah satu hilang dari layar, maka data state dari keduanya akan sama */}
    //   {/* menggunakan ternary operator untuk menampilkan component 1 dan 2 */}
    //   {show2 ? <Counter name={"Ilham"}></Counter> : <Counter name={"Taufik"}></Counter>}
    //   <br />
    //   <input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan Counter 2
    // </div>

    // cara 3 : cara mereset elemen counter (pertama), yaitu bisa mengubah component counter (kedua) menjadi element berbeda (contoh : p)
    // <div>
    //   {/* jika terdapat 2 komponen berbeda di satu posisi yang sama, maka tetap akan mereset counter / state pada component counter */}
    //   {show2 ? <Counter name={"Ilham"}></Counter> : <p>Ini adalah paragraf</p>}
    //   <br />
    //   <input type="checkbox" checked={show2} onChange={handleChange} /> {show2 ? "Tampilkan Paragraf" : "Tampilan Counter"}
    // </div>

    // cara 4 : ketika component nya sama, dan posisinya sama, namun strukturnya berbeda, maka state juga akan tereset di masing masing component
    // <div>
    //   {/* menggunakan ternary operator untuk menampilkan component 1 dan 2 */}
    //   {show2 ? (
    //     // component counter 1 menggunakan div
    //     <div>
    //       <Counter name={"Ilham"}></Counter>
    //     </div>
    //   ) : (
    //     // component counter 2 menggunakan section
    //     <section>
    //       <Counter name={"Taufik"}></Counter>
    //     </section>
    //   )}
    //   <br />
    //   <input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan Counter 2
    // </div>

    // cara 5 : ketika component nya sama, namun menggunakan logic masing masing, yang mana artinya posisinya berbeda (meskipun nanti tidak ada perubahan letak)
    // maka data state dari kedua komponen akan hilang (reset)
    // <div>
    //   {/* secara UI sama, namun posisinya berbeda, counter tetap tereset */}

    //   {/* menggunakan metode logical end */}
    //   {!show2 && <Counter name={"Ilham"}></Counter>}
    //   {show2 && <Counter name={"Taufik"}></Counter>}
    //   <br />
    //   <input type="checkbox" checked={show2} onChange={handleChange} /> {show2 ? "Tampilkan Counter Ilham" : "Tampilkan Counter Taufik"}
    // </div>

    // cara 6 : ketika component yang sama di posisi yang sama, tidak akan mereset data state nya, jika menggunakan key yang berbeda
    <div>
      {/* karena kedua komponen menggunakan key yang berbeda, maka data state akan berbeda */}
      {/* karena react akan menganggap komponennya berbeda */}
      {/* namun key akan tetap tereset, karena componentnya hilang dari tampilan */}
      {show2 ? <Counter key="ilham" name={"Ilham"}></Counter> : <Counter key="taufik" name={"Taufik"}></Counter>}
      <br />
      <input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan Counter 2
    </div>
  );
}
