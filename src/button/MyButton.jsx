// implementasi my button ada di file main (milik hello world)
export default function MyButton({ text, onHit }) {
  // attribute onHit adalah props yang bisa kita isikan event handler di luar komponen
  return <button onClick={onHit}>{text}</button>;
}
