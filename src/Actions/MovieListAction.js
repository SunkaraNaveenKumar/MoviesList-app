export const addItem=(formData)=>{
    return{
        type:"ADDITEM",
        payload:formData
    }
}
export const removeItem=(id)=>{
    return{
        type:"REMOVEITEM",
        payload:id
    }
}
export const searchItem=(value)=>{
    return{
        type:"SEARCHITEM",
        payload:value
    }
}
export const sortList=(value)=>{
    return{
        type:"SORTLIST",
        payload:value
    }
}
export const addCart=(product)=>{
    return{
        type:"ADDTOCART",
        payload:product
    }
}
export const handleDecrease=(id)=>{
    return {
        type:"HANDLEDECREASE",
        payload:id
    }
}