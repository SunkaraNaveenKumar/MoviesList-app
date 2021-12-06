import React from "react"
import  ReactDOM  from "react-dom"
import {BrowserRouter} from "react-router-dom"
import App from "./App"
import ConfigureStore from "./Store/ConfigerStore"
import { Provider } from "react-redux"
const store=ConfigureStore()
console.log('initialstate',store.getState())
store.subscribe(()=>{
    console.log("updated State",store.getState())
})
ReactDOM.render(<Provider store={store}> <BrowserRouter><App/></BrowserRouter> </Provider>,document.getElementById('root'))