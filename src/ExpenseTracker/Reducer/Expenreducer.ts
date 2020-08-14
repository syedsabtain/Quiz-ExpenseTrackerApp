
import {foraction2} from '../Types/Expensetypes'

const Reducer =(state:any,action:foraction2) =>{


    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [...state,{description:action.payload.description,amount:action.payload.amount,id:action.payload.id}]
            
        case 'DELETE_TRANSACTION':
            return state.filter((value:any)=> value.id!==action.payload.id)
                
        default:
            break;
    }
}

export default Reducer