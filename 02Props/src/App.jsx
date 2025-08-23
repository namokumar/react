import React from "react";
import Header from "./Components/Header.jsx";
import Component from "./Components/Component.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CompImg from "./assets/components.png";
import "./index.css";

function App() {
  return (
    <>
      <main>
        <Header />
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <Component
              title="Components"
              description="React components are independent, reusable blocks of code that serve as the fundamental building blocks of a React application's user interface. They encapsulate the structure, behavior, and presentation of specific UI elements."
              img={CompImg}
            />
            <Component
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].img}
            />
            <Component
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].img}
            />
            <Component
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              img={CORE_CONCEPTS[2].img}
            />
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
