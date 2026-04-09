// import { useState } from "react";
import { useImmer } from "use-immer";

// menyiapkan data awal
const initialContact = {
  name: "",
  message: "",
};

// // pakai cara 1 : menggunakan spread syntax (manual)
// export default function ContactForm() {
//   // membuat data state awal
//   const [contact, setContact] = useState(initialContact);

//   // membuat event handler function dengan event object (e)

//   // untuk menduplikasi object
//   function handleNameChange(e) {
//     // menggunakan spread syntax untuk menduplikasi bawaan object state
//     // khusus untuk attribute name, akan diambil berdasarkan input oleh pengguna
//     setContact({ ...contact, name: e.target.value }); // diambil ketika state dipanggil pada form input
//   }

//   // untuk menduplikasi object
//   function handleMessageChange(e) {
//     // menggunakan spread syntax untuk menduplikasi bawaan object state
//     // khusus untuk attribute message, akan diambil berdasarkan input oleh pengguna
//     setContact({ ...contact, message: e.target.value }); // diambil ketika state dipanggil pada form input
//   }

// pakai cara 2 : menggunakan libary immer, dan use-immer
export default function ContactForm() {
  // membuat data state awal
  const [contact, setContact] = useImmer(initialContact);

  // membuat event handler function dengan event object (e)
  // jika menggunakan useImmer maka, tidak perlu malakukan duplikasi lagi, karena sudah dilakukan otomatis
  // sehingga ketika terdapat perubahan cukup difokuskan pada attribute yang ingin dirubah saja

  function handleNameChange(e) {
    setContact((draft) => {
      // dengan menggunakan draft otomatis data object awal terduplikasi
      draft.name = e.target.value; // mengambil nilai name dari input pengguna
    });
  }

  function handleMessageChange(e) {
    setContact((draft) => {
      // dengan menggunakan draft otomatis data object awal terduplikasi
      draft.message = e.target.value; // mengambil nilai message dari input pengguna
    });
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <form action="">
        <input type="text" placeholder="name" onChange={handleNameChange} value={contact.name} />
        <br />
        <input type="text" placeholder="message" onChange={handleMessageChange} value={contact.message} />
      </form>

      <br />
      <h1>Contact Detail</h1>
      <p>Name : {contact.name}</p>
      <p>Message : {contact.message}</p>
    </div>
  );
}
