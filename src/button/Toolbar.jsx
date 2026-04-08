// implementasi toolbar ditambahkan pada file main (milik hello world)
export default function Toolbar({ onHit }) {
  return (
    <div onClick={onHit} style={{ backgroundColor: "yellow" }}>
      {/* ketika button 1 atau 2 di klik, maka div juga akan tertrigger onClick nya */}
      {/* hal ini bisa kita cegah dengan menghentikannya, menggunakan method stopPropagation() */}
      <button onClick={onHit}>Button 1</button>
      <button onClick={onHit}>Button 2</button>
    </div>
  );
}
