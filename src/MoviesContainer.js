import React,{useState} from "react";
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";
import MovieStats from "./Movistats";
import { useSelector,useDispatch } from "react-redux";
import {  searchItem, sortList } from "./Actions/MovieListAction";


const MoviesContainer=(props)=>{
    console.log('happycontainer')
    const dispatch=useDispatch()
    const moviesList=useSelector((state)=>{
        return state.moviesList
    })
    const [search,setSearch]=useState("")
    const [sort,setSort]=useState("")
    const [edit,setEdit]=useState({})
    const hahndleChange=(e)=>{
        const result=e.target.value
        setSearch(result)
        dispatch(searchItem(result))
    }
    const handleSort=(e)=>{
        const result=e.target.value
        setSort(result)
        dispatch(sortList(result))
    }
    const handleEdit=(id)=>{
        const result=moviesList.find(ele=>{
            return ele.id===id
        })
        setEdit(result)
    }
    const clearEditForm=()=>{
        setEdit({})
    }
    return (
        <div>
            <input type="text" value={search} onChange={hahndleChange} placeholder="Search By Movie Name..."/>
            <select name="" id="" value={sort} onChange={handleSort}>
                <option value="">Order By Rating</option>
                <option value="htl">High to Low</option>
                <option value="lth">Low to High</option>
            </select> <hr />
            <div className={"listform"}>
            <MoviesList handleEdit={handleEdit}/> 
            <div className={"nav4"}>
            <MovieForm edit={edit} clearEditForm={clearEditForm}/> 
            <MovieStats/>
            </div>
            </div>
           
        </div>
    )
}
export default MoviesContainer