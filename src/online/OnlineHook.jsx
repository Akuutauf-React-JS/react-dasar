import { useEffect, useState } from "react";

// membuat custom hook (manual)
export function useOnline() {
  // menyiapkan variabel
  const [isOnline, setIsOnline] = useState(true);

  // menggunakan use effect, untuk dapat mengakses diluar react (browser)
  useEffect(() => {
    // membuat event handler di dalam use effect
    function handleOnline() {
      console.log("ONLINE TRIGGERED");
      setIsOnline(true);
    }

    function handleOffline() {
      console.log("OFFLINE TRIGGERED");
      setIsOnline(false);
    }

    // melakukan aksi untuk menambahkan event listener ke browser
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // cleanup effect, digunakan untuk dieksekusi kode dibawah ketika use effect selesai dijalankan
    return () => {
      // log
      console.log("cleanup running");

      // melakukan aksi untuk menghapus event listener ke browser
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
    // [] : depencency kosong digunakan, agar tidak terjadi infinite looping
  }, []);

  // mengembalikan nilai online adalah true (untuk nilai awal)
  return isOnline;
}
