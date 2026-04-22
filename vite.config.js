import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // menambahkan build agar dapat mengcompile multi page pada saat build menggunakan vite
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello_world: "hello-world.html",
        contact: "contact.html",
        task: "task.html",
        counter: "counter.html",
        note: "note.html",
        profile: "profile.html",
        timer: "timer.html",
        guestbook: "guestbook.html",
        product: "product.html",
        online: "online.html",
      },
    },
  },
});
