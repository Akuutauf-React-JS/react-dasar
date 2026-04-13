import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Task from "../task/Task";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Task></Task>
  </StrictMode>,
);
