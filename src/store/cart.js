const ADDCART = 'cart/ADD'

export const addCart = (productID)=>{
    return {
        type: ADDCART,
        productID
    }
}

export default function cartReducer(state = {}, action){

    Object.freeze(state);
    const nextState = { ...state };

    switch(action.type){
        case ADDCART:{
            const itemID = action.productID;
            return {...nextState, [itemID]:{id: itemID, count: 1}};
        }
        default:
            return nextState;
    }
}
