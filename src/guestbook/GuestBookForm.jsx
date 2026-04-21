// ref tidak bisa dibuat di dalam component, hanya bisa di DOM
// export default function GuestBookInput({ name, setName}) {
//   return (
//     <>
//       <label htmlFor="name">Name</label>
//       <br />

//       <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
//     </>
//   );
// }

// ref bisa kita integrasikan dengan component, kalau kita kirimkan melalui props
export default function GuestBookInput({ name, setName, ref }) {
  return (
    <>
      <label htmlFor="name">Name</label>
      <br />

      <input ref={ref} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
}
