import { createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import MoviesReducer from '../Reducers/MoviesReducer'
import searchReducer from '../Reducers/SearchReducer'


const ConfigureStore=()=>{
    const store=createStore(combineReducers({
    moviesList:MoviesReducer,
    searchItem:searchReducer,
    }),applyMiddleware(thunk))
    return store
}
export default ConfigureStore