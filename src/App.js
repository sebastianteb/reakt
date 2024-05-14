import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";
 
function App() {
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [kurs, setKurs] = useState("");
 
  let courses = [
    "Programowanie w C#",
    "Angular dla początkujących",
    "Kurs Django",
  ];
 
  const handleForm = (e) => {
    e.preventDefault();
    if (imie !== "" && nazwisko !== "" && kurs !== "")
      alert(`${imie} ${nazwisko} zapisal sie na ${kurs}`);
    else alert("Brak wszystkich danych!");
  };
 
  return (
    <>
      <h1>Liczba kursów: {courses.length}</h1>
      <ol>
        {courses.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ol>
      <form onSubmit={handleForm}>
        <label>
          Imię
          <input
            value={imie}
            onChange={(e) => setImie(e.target.value)}
            className="form-control"
          />
        </label>
        <label>
          Nazwisko
          <input
            value={nazwisko}
            onChange={(e) => setNazwisko(e.target.value)}
            className="form-control"
          />
        </label>
        <label>
          Kurs
          <select
            className="form-control"
            value={kurs}
            onChange={(e) => setKurs(e.target.value)}
          >
            <option>Wybierz opcję</option>
            {courses.map((el) => {
              return <option value={el}>{el}</option>;
            })}
          </select>
        </label>
        <button className="btn btn-primary" type="submit">
          Dodaj do kursu
        </button>
      </form>
    </>
  );
}
 
export default App;