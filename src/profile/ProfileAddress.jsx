import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileAddress() {
  // mendapatkan data yang sudah disiapkan dengan context, menggunakan function useContext()
  const profile = useContext(ProfileContext);

  return (
    <>
      <h2>Profile Address</h2>

      {/* setelah context disimpan di variabel, maka bisa langsung digunakan */}
      <p>Alamat : {profile}</p>
    </>
  );
}
