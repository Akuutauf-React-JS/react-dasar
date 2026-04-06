// membuat variabel global
// let counter = 0;

// contoh penerapan yang bukan pure function (jika menggunakan counter)
export default function Row({ id, text }) {
  // melakukan operasi increment di dalam function
  // counter++;

  return (
    <tr>
      {/* solusinya bisa menggunakan id, agar data di setiap row bisa konsisten */}
      <td>{id}</td>
      <td>{text}</td>

      {/* nanti counter akan kelipatan 2, karena di file main menggunakan strictmode */}
      {/* dimana strictmode itu sebelum ditampilkan akan merender sebanyak 2x */}
      {/* sehingga function ini memiliki side effect, berubah counter nya setiap pemanggilan */}
    </tr>
  );
}
