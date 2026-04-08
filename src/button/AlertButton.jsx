// implementasi alert button ada di file main (milik hello world)
export default function AlertButton({ text, message = "Hai" }) {
  // membuat function event handler di dalam komponen AlertButton
  // menambahkan event object sebagai parameter di event handler (e)
  function handleClick(e) {
    alert(message);

    // e.target digunakan untuk mengambil komponen yang baru saja dilakukan aksi (button)
    console.info(e.target);
  }

  return <button onClick={handleClick}>{text}</button>;
}
