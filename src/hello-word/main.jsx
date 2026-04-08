import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import TodoList from "../todolist/TodoList";
import Container from "./Container";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";

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

      {/* implementasi alert button */}
      <AlertButton text="Click me" message="Halo jugaa"></AlertButton>

      {/* implementasi my button */}
      {/* menggunakan arrow function untuk mengisikan props onHit, yang mana mengandung event handler */}
      <MyButton text="Hit me" onHit={() => alert("Hited the button")}></MyButton>

      {/* implementasi toolbar */}
      <Toolbar
        // menggunakan event object
        onHit={(e) => {
          // menghentikan propagation, agar tidak muncul handler (onClick) 2 kali
          e.stopPropagation();
          alert("Your'e click toolbar");
        }}
      />

      {/* implementasi search form */}
      <SearchForm></SearchForm>

      {/* implementasi say hello form */}
      <SayHelloForm></SayHelloForm>
    </Container>
  </StrictMode>,
);
