// membuat function HelloWorld
function HelloWorld() {
  // menambahkan element pada komponen HelloWorld
  return (
    // mereturn div (fargment)
    // menggunakan bahasa XML, yang mana semua tag html wajib di tutup. contoh : <img/>
    <div>
      {/* komponen yang sudah di buat untuk membentuk 1 komponen utuh dapat dipanggil di sini*/}
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </div>
  );
}

// penerapan component, multi component
// dalam satu file jsx, bisa kita buat beberapa komponen yang kita butuhkan
// seperti contoh 2 komponen untuk membentuk satu komponn utuh
function HeaderHelloWorld() {
  // penerapan javascript di JSX
  // untuk mengeksekusi kode javascript di JSX, kita perlu menambahkan kurung kurawal '{ }'
  const text = "Hello World";
  return (
    <h1
      style={
        // membuat objek untuk mengisikan parameter pada style
        // dengan menggunakan metode inline
        {
          color: "salmon",
          backgroundColor: "green",
        }
      }
    >
      {text.toUpperCase()}
    </h1>
  );
}

function ParagraphHelloWorld() {
  let text = "Hello World";

  // membuat objek untuk mengisikan parameter pada style
  // dengan cara variabel
  const style = {
    color: "aqua",
    backgroundColor: "purple",
  };

  return <p style={style}>{text.toLowerCase()}</p>;
}

export default HelloWorld;
