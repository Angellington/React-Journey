import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  const n = 15
  const [name, setName] = useState("Mario")

  const handleChangeName = (e) => {
    e.preventDefault();

    if(name === "Mario"){
      setName("Miqueias")
      alert(`O nome atual é ${name}`)
    } else {
      setName("Mario")
      alert(`O nome atual é ${name}`)
    }
  }

  const redTitle = false;


  return (
    <>
      <div className="App">
        {/* CSS Global  */}
        <h1>React com CSS</h1>
        {/* CSS de Componente  */}
        <MyComponent />
        <p>Este parágrafo do do App.jsx</p>
        {/* Inline CSS */}
        <p style={{ color: "blue", padding: "25px", borderTop: '2px solid red' }}>
          Este elemento foi estilizado de forma inline
        </p>
        <p style={{ color: "magenta", padding: "25px", borderTop: '2px solid red' }}>
          Este elemento foi estilizado de forma inline
        </p>

        {/*CSS Inline Dinâmico */}
        <h2 style={ n < 10 ? ({color: 'purple'}) : ({ color: "pink" }) }>CSS dinâmico</h2>
         <h2 style={ n < 10 ? ({color: 'purple'}) : ({ color: "pink" }) }>CSS dinâmico</h2>

         <h2 style={ name === "Mario" ? ({backgroundColor: 'purple'}) : null }>CSS dinâmico</h2>

         <button onClick={handleChangeName}>Mudar de nome</button>


         {/* Classe Dinâmica */}
         <h2 className={redTitle ? "red-title" : "title" }>Este título vai ter classe dinâmica</h2>
      </div>
    </>
  );
}

export default App;
