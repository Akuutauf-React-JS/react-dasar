import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import ProfileForm from "./ProfileForm";
import { ProfileContext } from "./ProfileContext"; // context
import { useState } from "react";

export default function ProfileApp() {
  // menyiapkan data context
  const [name, setName] = useState("Taufik");

  return (
    // untuk mengubah data context, tinggal memberikan props value, pada component context (ProfileContext)
    <>
      {/* ProfileContext sebagai parent, yang menyediakan data context */}
      {/* berarti semua component yang menggunakan data context dari child, maka value nya adalah "Taufik" */}
      {/* kita tidak bisa mengubah data context selain melalui component context nya sendiri */}
      <ProfileContext.Provider value={name}>
        <h1>Profile App</h1>

        {/* implementasi profile form */}
        {/* namun kita bisa memanfaatkan state untuk mengubah melalui komponen dibawahnya */}
        <ProfileForm name={name} setName={setName}></ProfileForm>

        {/* implementasi profile */}
        <Profile></Profile>

        {/* implementasi profile address */}
        <ProfileAddress></ProfileAddress>
      </ProfileContext.Provider>
    </>
  );
}
