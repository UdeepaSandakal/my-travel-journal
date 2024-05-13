import React from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import data from "./data.js";
import Footer from "./components/Footer.jsx";

function App() {
  const cardSec = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <NavBar />
      {cardSec}
      <Footer />
    </>
  );
}

export default App;
