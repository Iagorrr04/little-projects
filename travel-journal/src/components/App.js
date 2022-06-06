import React from "react";

import data from "../data";

// Components.
import Navbar from "./Navbar"
import Card from "./Card"

function App() {
    let journalItems = data.map(item => {
      return <Card
              {...item}
              />
    })
    return(
      <>
        <Navbar/>
        <div className="journal-div">
          {journalItems}
        </div>
      </>
    )
};

export default App;