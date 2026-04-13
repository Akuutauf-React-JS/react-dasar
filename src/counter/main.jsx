import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Counter from "../counter/Counter";
import CounterApp from "../counter/CounterApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* kalau posisi component tidak berubah,- */}
    {/* maka data yang dikembalikan oleh state tidak balik ke nilai awal */}
    {/* <Counter></Counter> */}

    {/* sehingga meskipun ada komponen yang sama, namun penempatan berbeda dan tetap pada setiap komponennya,- */}
    {/* maka data state juga akan berbeda di masing-masing komponen tersebut */}
    {/* <Counter></Counter> */}

    {/* menggunakan Component CounterApp */}
    <CounterApp></CounterApp>
  </StrictMode>,
);
