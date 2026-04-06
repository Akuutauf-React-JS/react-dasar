// import row
import Row from "./Row";

// implementasi table di tampilkan pada file main.jsx (milik hello-world)

export default function Table() {
  return (
    <table border="1">
      <tbody>
        <Row id="1" text="Satu"></Row>
        <Row id="2" text="Dua"></Row>
        <Row id="3" text="Tiga"></Row>
      </tbody>
    </table>
  );
}
