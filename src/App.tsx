import { useState } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import House from "./components/house";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <House />
    </>
  );
}

export default App;
