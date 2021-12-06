import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeItem } from "./Actions/MovieListAction";

const MoviesList=(props)=>{
    const {handleEdit}=props
    console.log("happylist")
        const dispatch=useDispatch()
    const moviesList=useSelector((state)=>{
        return state.moviesList
    })
    const searchItem=useSelector((state)=>{
        return state.searchItem
    })
     const result=moviesList.filter(ele=>{
     return ele.name.toLowerCase().includes(searchItem.toLowerCase())
    })
     return(
        <div className={result.length>0?"nav5":"nav1"}>
            {result.length>0?(
                    <>
                        <ul>
                         {result.map(ele=>{
                    return <li key={ele.id}> 
                    <h3> {ele.name}</h3>
                    <h3>{ele.rating}</h3>
                     <button onClick={()=>{dispatch(removeItem(ele.id))}}>Remove</button>
                     <button onClick={()=>{handleEdit(ele.id)}}>Edit</button>
                     </li>
                })}
                  </ul>
                    </>
                ):(
                    <div>
                        <h2>No Movies Add ur first Movie</h2>
                    </div>
                )}
               
           
        </div>
    )
}
export default MoviesList