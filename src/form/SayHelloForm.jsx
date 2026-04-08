// implementasi say hello form dilakukan pada file main (milik hello world)
export default function SayHelloForm() {
  // membuat event handler untuk click untuk menerapkan side effect
  // biasanya side effct terjadi dan tertrigger oleh event handler
  function handleClick(e) {
    // menggunakan prevent default, agar tidak langsung tersubmit
    e.preventDefault();

    // mengambil value dari input_name
    const name = document.getElementById("input_name").value;

    // lalu merubah data text pada element text_hello
    document.getElementById("text_hello").innerText = `Hello ${name}`;
  }

  return (
    <div>
      <form action="">
        <input type="text" id="input_name" />

        {/* menerapkan event handle, handleClick di button */}
        <button onClick={handleClick}>Say Hello</button>
      </form>

      {/* teks yang akan diubah */}
      <h1 id="text_hello">Hello World</h1>
    </div>
  );
}
