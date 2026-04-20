import { useRef, useState } from "react";

export default function Timer() {
  // mendefinisikan variabel state dan ref
  const [start, setStart] = useState(null); // digunakan untuk memulai waktu sekarang
  const [now, setNow] = useState(null); // digunakan untuk melakukan perubahan perhitungan waktu saat ini
  const timer = useRef(null); // digunakan untuk menghitung waktu dari awal hingga selesai
  // sehingga timer.current : digunakan untuk menyimpan id interval (tidak memicu render).
  // karena ref biasanya memang digunakan pada mutable value yang tidak perlu ditampilkan di browser

  // membuat event handler
  function handleStart() {
    // mengubah waktu sekarang dengan state (akan merender halaman)
    setStart(Date.now());
    setNow(Date.now());

    // menghitung waktu awal hingga akhir (tanpa membutuhkan untuk render halaman)
    // interval akan dihitung dengan memanfaatkan attribute bawaan ref, yaitu current
    // sehingga jikalau disimpan di now, maka akan merender browser, dan timer akan berhenti
    // sehingga dalam hal ini interval di simpan ke dalam current, karena ref tidak akan merender browser
    timer.current = setInterval(() => {
      // setiap interval 10 mili detik akan diubah utnuk data current nya terus menerus (state)
      setNow(Date.now());

      // kalau menggunakan state sebagai set id interval, maka halaman akan me-render (reload)
      // setTimer(setInterval(...));
    }, 10);
  }

  // membuat event handler untuk stop
  function handleStop() {
    // akan menghapus waktu interval didata milik ref
    // kalau tidak menggunakan ref, maka tidak akan bisa berhenti, dan tidak bisa melakukan clearInterval
    clearInterval(timer.current);
  }

  // analogi
  // state = papan skor (kelihatan user)
  // ref = remote control (ngatur sistem, tapi user nggak lihat)

  return (
    <>
      {/* implementasi untuk data now milik state akan merender halaman secara terus menerus */}
      <h1>Time : {now - start} ms</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
