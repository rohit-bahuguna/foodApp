import { actionTypes } from "../constants/actionTypes";

const tempState = {
    products: []
}
export const cartReducer = (state = tempState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.ADDTOCART :
            // console.log('state', state);
            let temp = [...state.products, payload];
            return {products: temp}
        case actionTypes.REMOVEFROMCART :
            let item = state.products;
         const newItems =   item.filter((value , index)=> {
                return value._id !== payload ;
            })
            console.log(newItems)
            let tempitem = [...newItems];
            return {products: tempitem}
          //  console.log("remove from cart" ,state , payload )
        case actionTypes.CLEARCART:
            return {products : []}
            
        default:
            return state
    }
}