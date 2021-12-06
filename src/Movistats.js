import React,{useEffect,useState} from "react";
import { useSelector } from "react-redux";
const MovieStats=(props)=>{
    console.log('happystats')
    const [topRatedMovie,setMovie]=useState("")
    const moviesList=useSelector((state)=>{
        return state.moviesList
    })
    useEffect(()=>{
         const result=moviesList.sort((a,b)=>a.rating-b.rating)
         setMovie(result[0])
    },[moviesList])
    return(
        <div className={"nav3"}>
            <h2>Total Movies-{moviesList.length}</h2>
            {topRatedMovie ?(
                <div>
                    <h3>Top Rated Movie Name-{topRatedMovie.name}</h3>
                    <h4>Rating-{topRatedMovie.rating}</h4>
                </div>
            ):(
                <div>
                    <h3>No movies</h3>
                    <p>Add Movies</p>
                </div>
            )}
        </div>
    )
}
export default MovieStats