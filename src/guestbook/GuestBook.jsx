import { useRef, useState } from "react";
import GuestBookForm from "./GuestBookForm";

export default function GuestBook() {
  // menyiapkan variabel
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // untuk menyimpan input name
  const nameInput = useRef(null);

  // membuat event handler
  function handleSubmit(e) {
    // ketika tombol submit ditekan, maka akan menjalankan kode dibawah

    // mencegah agar tidak reload pada saat submit
    e.preventDefault();

    // mengosongkan kembali untuk data nama dan message
    setName("");
    setMessage("");

    // akan langsung fokus ke input kembali, setelah di submit (meskipun tanpa id = name, di input)
    nameInput.current.focus(); // cara yang baru, karena sebelumnya kita menggunakan ref untuk nameInput

    // cara manual
    // document.getElementById("name").focus();

    // menampilkan aler ke browser
    alert(`Name: ${name}, Message: ${message}`);
  }

  return (
    <>
      <h1>Guest Book</h1>
      <form action="">
        {/* implementasi ref diletakkan di input milik name (normal) */}
        {/* sehingga tidak perlu pakai id, nanti setelah di submit akan otomatis fokus ke input name */}
        {/* <label htmlFor="name">Name</label>
        <br /> */}

        {/* <input type="text" ref={nameInput} name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <br /> */}

        {/* implementasi ref diletakkan di komponent, tidak akan berfungsi */}
        {/* jika, kita memaksa menggunakan ref di component. maka akan error null untuk attribute current */}
        {/* <GuestBookForm name={name} setName={setName}></GuestBookForm>
        <br /> */}

        {/* solusi yang lain kalau memang terpaksa mau menambahkan ref ke component, maka kita bisa kirimkan lewat props */}
        <GuestBookForm ref={nameInput} name={name} setName={setName}></GuestBookForm>
        <br />

        <label htmlFor="message">Message</label>
        <br />

        {/* implementasi message */}
        <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <br />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
