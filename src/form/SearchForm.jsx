// implementasi search form pada file main (milik hello world)
export default function SearchForm() {
  return (
    <form action="">
      <input type="text" />

      <button
        onClick={(e) => {
          // mencegah button untuk submit form secara langsung (menghentikan action submit)
          // sehingga ketika button ditekan, nanti keywoard pada form tidak akan hilang
          e.preventDefault();
          alert("You search");
        }}
      >
        Searh
      </button>
    </form>
  );
}
