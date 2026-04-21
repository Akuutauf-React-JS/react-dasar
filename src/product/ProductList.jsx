import { useEffect, useState } from "react";
// import { seRef } from "react";
import Product from "./Product";

// membuat function component ProductList dengan implementasi effect hooks, ref, dan clean up
// export default function ProductList() {
//   // menyiapkan variabel
//   const [products, setProducts] = useState([]);
//   const loaded = useRef(false); // digunakan untuk memberikan flag load data products

//   // menggunakan effect hooks
//   // useEffect akan dipanggil setelah render selesai, sehingga pastikan tidak terjadi perubahan data state-
//   // karena jika terjadi, maka akan dipanggil terus menerus (infinity looping)

//   // solusinya bisa menggunakan loaded dengan ref
//   // sehingga bisa mencegah jika terjadi perubahan state saat ini, maka data products tidak perlu di load ulang
//   useEffect(() => {
//     // mengecek apakah pernah melalukan load data products atau tidak (kalau tidak dicek load, akan looping)
//     // kenapa?, karena kita melakukan perubahan data product (baris 26)
//     // sehingga ketika terjadi perubahan state (data product dengan setProduct), maka akan di render ulang
//     // dan ketika dirender ulang, maka akan dipanggil kembali untuk fetch data nya (begitu terus hingga looping)
//     console.info("Call Use Effect"); // bisa dilihat di sini

//     if (loaded.current === false) {
//       // mengambil data product dari public/products.json
//       fetch("/products.json")
//         .then((response) => response.json()) // menyimpannya dalam bentuk response json
//         .then((data) => setProducts(data)) // menyimpannya ke dalam data, menggunakan state setProducts
//         .then(() => (loaded.current = true)); // dan mengubah current pada ref menjadi true (sudah pernah di load)
//     }

//     // menambahkan effect clean up
//     // effect clean up akan dieksekusi ketika effect hooks selesai dilakukan, atau sebelum component dihilangkan
//     // cara membuat effect clean up cukup gunakan closure function
//     return () => {
//       console.log("ProductList Component unmounted");
//     };
//   });

//   return (
//     <>
//       <h1>Product List</h1>

//       {/* looping products */}
//       {products.map((product) => (
//         // menampilkan component Product setiap jumlah dari data product
//         <Product key={product.id} product={product}></Product>
//       ))}
//     </>
//   );
// }

// membuat function component ProductList dengan implementasi effect hooks, effect dependencies, dan empty dependencies
export default function ProductList() {
  // menyiapkan variabel
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  // membuat event handler
  function handleClick() {
    // mengubah data setLoad
    setLoad(true);
  }

  // menerapkan empty dependencies, dimana hanya sekali dipanggil pada saat selesai render pertama kali saja
  useEffect(() => {
    console.log("Use Effect with []");
  }, []);

  // menggunakan use effect, dengan dependencies dan clean up
  // useEffect(() => {
  //   // menampilkan log
  //   console.info("Call Use Effect");

  //   // mengecek, apakah load nya sudah dilakukan
  //   if (load) {
  //     // kalau load bernilai true, maka akan dijalankan use effect nya
  //     fetch("/products.json")
  //       .then((response) => response.json()) // menyimpannya dalam bentuk response json
  //       .then((data) => setProducts(data)); // menyimpannya ke dalam data, menggunakan state setProducts
  //   }

  //   // menambahkan effect clean up
  //   return () => {
  //     console.log("ProductList Component unmounted");
  //   };

  //   // use effect mendengarkan dependencies nya dari load, kalau value load berubah (dari false ke true),-
  //   // maka use effect di dalamnya akan dijalankan
  //   // artinya, kalau misalnya sudah dipanggil data product, dan value load berubah menjadi dari false ke true,-
  //   // maka jika di tekan lagi tombol nya tidak akan menjalankan untuk load data product lagi (karena handleClick nilai nya tetep true, untuk load nya)
  // }, [load]);

  // menggunakan use effect dengan metode async
  useEffect(() => {
    // use effect tidak bisa melakukan async await secara langsung,-
    // namun kita bisa membuat aysnc function didalam use effect (async function diluar juga masih bisa),-
    // yang nantinya bisa kita panggil saat effect ke trigger

    // membuat async function
    async function fetchProducts() {
      // menyiapkan data response
      const response = await fetch("/products.json"); // mengambil data dari API/JSON
      const data = await response.json(); // melakukan konversi ke bentuk json
      setProducts(data); // menyimpan data products
    }

    console.log("Load products");

    // akan menjalankan load, jika use effect dependencies berubah value nya, dan bernilai true
    if (load) {
      fetchProducts();
    }

    // menambahkan effect clean up
    return () => {
      console.log("ProductList Component unmounted");
    };

    // use effect mendengarkan dependencies nya dari load, kalau value load berubah (dari false ke true),-
    // maka use effect di dalamnya akan dijalankan
    // artinya, kalau misalnya sudah dipanggil data product, dan value load berubah menjadi dari false ke true,-
    // maka jika di tekan lagi tombol nya tidak akan menjalankan untuk load data product lagi (karena handleClick nilai nya tetep true, untuk load nya)
  }, [load]);

  return (
    <>
      <h1>Product List</h1>

      <button onClick={handleClick}>Load Products</button>
      <br />

      {/* looping products */}
      {products.map((product) => (
        // menampilkan component Product setiap jumlah dari data product
        <Product key={product.id} product={product}></Product>
      ))}
    </>
  );
}
