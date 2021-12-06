import React from "react";
import MoviesContainer from "./MoviesContainer";
import "./index.css"

const App=(props)=>{
    console.log('happyApp')
    return(
        <div>
            <h2>MY BIG MOVIE LIST</h2>
            <MoviesContainer /> 
        </div>
    )
}
export default App