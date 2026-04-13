// membuat function TaskList dengan props "items" (default value nya, array kosong)
export default function TaskList({ items = []}) {
  return (
    <div>
      <h1>List Task</h1>

      <ul>
        {/* melakukan perulangan ke list menggunakan map */}
        {/* tanpa menggunakan kurung kurawal lagi pada function arrow, agar bisa langsung direturn */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
