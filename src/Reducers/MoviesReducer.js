const InitialMoviesList=[]

const MoviesReducer=(state=InitialMoviesList,action)=>{
switch (action.type) {
    case "ADDITEM":{
        const result=state.every(ele=>{
            return ele.id!==action.payload.id
        })
        if(result){
                return [...state,action.payload] 
        }
        else
        {
            const result=state.map(ele=>{
                if(ele.id===action.payload.id)
                {
                    return{...ele,...action.payload}
                }
                else
                {
                    return {...ele}
                }
            })
            return result
        }
        
    }
    case "REMOVEITEM":{
        const result=state.filter(ele=>{
            return ele.id!==action.payload
        })
        return result
    }
    case "SORTLIST":{
        if(action.payload==="htl")
        {
            console.log('htl')
            const result=state.sort((a,b)=>(b.rating-a.rating))
            console.log(result)
            return result
        }
        else if(action.payload==="lth")
        {
            console.log('lth')
            const result=state.sort((a,b)=>(a.rating-b.rating))
            console.log(result)
            return result
        }
        else if(action.payload==="")
        {
            return state
        }
        else
        {
            return state
        }
    }
    default:{
        return state
    }
}
}

export default MoviesReducer