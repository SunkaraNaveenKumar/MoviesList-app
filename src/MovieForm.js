import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addItem } from "./Actions/MovieListAction";

const MovieForm=(props)=>{
    console.log('happyform')
    const {edit,clearEditForm}=props
    const dispatch=useDispatch()
    const [movieName,setName]=useState('')
    const [movieRating,setRating]=useState('')
    const [id,setId]=useState(uuidv4())
    useEffect(()=>{
     setId(edit.id?edit.id:uuidv4())
     setName(edit.name?edit.name:"")
     setRating(edit.rating?edit.rating:"")
    },[edit])
    const handleChange=(e)=>{
        const result=e.target.name 
        const result1=e.target.value 
        if(result==="name")
        {
            setName(result1)
        }
        else if(result==="rating")
        {
            setRating(result1)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setRating("")
        setName("")
        setId(uuidv4())
        clearEditForm()
       const formData={
           id:id,
           name:movieName,
           rating:Number(movieRating)
       }
       dispatch(addItem(formData))
    }
    return(
        <div className={"nav2"}>
            {Object.keys(edit).length>0?<h3>Edit form</h3>:<h3>ADD MOVIE</h3>}
           <form action="" onSubmit={handleSubmit}>
               <input type="text" name="name" value={movieName} onChange={handleChange} placeholder="Enter Movie Name.."/> <br />
               <input type="text" name="rating" value={movieRating} onChange={handleChange} placeholder="Enter Rating.."/> <br />
               <input type="submit" name="" id="" value={Object.keys(edit).length>0?"Edit":"Add"}/>
           </form>
        </div>
    )
}
export default MovieForm