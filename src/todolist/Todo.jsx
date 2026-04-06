// cara 1 : manual
// export default function Todo({ text, isCompleted, isDeleted = false }) {
//   // mengecek apakah sudah dihapus komponen list nya
//   if (isDeleted) {
//     return null;
//   }
//   // mengecek kalau sudah selesai/completed
//   else if (isCompleted) {
//     // maka teks nya akan di hapus
//     return (
//       <li>
//         <del>{text}</del>
//       </li>
//     );
//   } else {
//     // kalau tidak selesai/incomplete, maka tetap tampilkan teks
//     return <li>{text}</li>;
//   }
// }

// cara 2 : menggunakan ternary operator (lebih ringkas)
export default function Todo({ text, isCompleted, isDeleted = false }) {
  if (isDeleted) {
    return null;
  } else {
    return (
      <li>
        {/* menggunakan operator ternary */}
        {/* kalau true akan menggunakan tag del */}
        {/* kalau false akan menampilkan isi komponen list nya */}
        {/* {isCompleted ? <del>{text}</del> : text} */}
        {/* cara lain menggunakan logical AND */}
        {text} {isCompleted && "✅"}
      </li>
    );
  }
}
