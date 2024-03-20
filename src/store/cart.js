const ADDCART = 'cart/ADD'
const REMOVECARTITEM = 'cart/REMOVECARTITEM'

export const addCart = (productID)=>{
    return {
        type: ADDCART,
        productID
    }
}

export const removeCartItem = (productID) => {
    return {
        type: REMOVECARTITEM,
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
        case REMOVECARTITEM: {
            delete nextState[action.productID];
            return nextState;
        }
        default:
            return nextState;
    }
}
