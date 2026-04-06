import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import TodoList from "../todolist/TodoList";
import Container from "./Container";
import Table from "../table/Table";

// implementasi create root
// create root membutuh kan 2 parameter, yaitu component dan option (sifatnya opsional)
// menggunakan get element by id untuk memodifikasi tampilan utama dengan id adalah root
createRoot(document.getElementById("root")).render(
  // strict mode, digunaakn untuk membantu pada tahap pengembangan, membantu menemukan bug pada komponen yang hendak di render
  <StrictMode>
    <Container>
      {/* menampilkan hello world dari komponen yang sudah dibuat sebelumnya */}
      <HelloWorld></HelloWorld>

      {/* implementasi dari todolist */}
      <TodoList></TodoList>

      {/* implementasi dari table */}
      <Table></Table>
    </Container>
  </StrictMode>,
);
