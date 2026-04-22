import { useOnline } from "./OnlineHook";

export default function Online() {
  // menyiapkan variabel untuk menyimpan status online
  // dengan menggunakan custom hooks (OnlineHook)
  const isOnline = useOnline();

  return (
    <>
      <h1>{isOnline ? "Online" : "Offline"}</h1>
      <p>{String(isOnline)}</p>
    </>
  );
}
