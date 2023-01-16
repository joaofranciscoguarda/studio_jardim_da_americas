import { useState } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Hero />
    </>
  );
}

export default App;
