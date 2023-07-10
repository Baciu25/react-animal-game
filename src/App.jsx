import { useState } from "react";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen flex justify-center">
        <Cards />
      </div>
    </>
  );
}

export default App;
