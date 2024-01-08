import React, { createContext, useState } from "react";

import { data } from "./data";

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";
import Families from "./components/Families";

export const FamilyContext = createContext();

export default function App() {
  const [families] = useState(data); // initalizes the state variable families with the data array.
  const [activeFamily, setActiveFamily] = useState(families[0]); // initalizes the state variable 'activeFamily' withe the first family in the array.

  return (
    <div className="App">
      <FamilyContext.Provider
        value={{
          activeFamily: activeFamily,
          setActiveFamily: setActiveFamily,
          families: families,
        }}
      >
        <Families />
        {activeFamily && <FamilyTree />}
      </FamilyContext.Provider>
    </div>
  );
}

// entry point for the application
