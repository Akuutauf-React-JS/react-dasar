export default function ProfileForm({ name, setName }) {
  // membuat event handler
  function handleChange(e) {
    // mengubah data name, agar menyesuaikan dengan input
    setName(e.target.value);
  }

  return (
    <>
      <h2>Profile Form</h2>
      <input type="text" value={name} onChange={handleChange} />
    </>
  );
}
