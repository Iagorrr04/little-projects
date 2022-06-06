import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero"
import Card from "./Card"


import data from "../data"

function App() {
    const experienceData = data.map(item => {
        return <Card
            key={item.id} // Necessary so JS let you in peace.
            {...item}   // Pass as a giant whole block.
        />
    });
    console.log(experienceData);
    return (
        <div className="APP">
            <Navbar/>
            <Hero/>
            <section className="experience--cards">
                {experienceData}
            </section>

        </div>
    );
}

export default App;