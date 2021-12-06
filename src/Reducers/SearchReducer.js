const searchReducer=(state="",action)=>{
    switch (action.type) {
        case "SEARCHITEM":{
            return action.payload
        }
        default:{
            return state
        }
    }
}
export default searchReducer