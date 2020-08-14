import React from 'react'
import Headcomp from './Components/Headcomp'
import Historycomp from './Components/Historycomp'
import Inputcomp from './Components/Inputcomp'
import {Container}  from '@material-ui/core'
import { Globalstore } from './Context/Globalstore'
import {forinit,forobj1,forobj2} from './Types/Expensetypes';
import Expensereducer from '../ExpenseTracker/Reducer/Expenreducer';
import { useReducer } from 'react';




const Main=()=>
{ 
    const initial:forinit =[{

        description:" Example Test Try",
        amount:1234,
        id:1
    },]
    const[state,dispatch]= useReducer(Expensereducer,initial)
    const handledelete=(obj:forobj1)=>{
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:{
                description:'obj.description',
                amount:2,
                id:obj.id
            }
        })
    }
    const handleaddition=(obj:forobj2)=>
    {
        dispatch({
            type:'ADD_TRANSACTION',
            payload:{
                description:obj.description,
                amount:obj.amount,
                id:obj.id
            }
        })
    }
    return(
        <Container maxWidth="xs" >
        <Globalstore.Provider value={{Data:state,Delete:handledelete,Addition:handleaddition}}>
       
           <Headcomp></Headcomp>
           <Historycomp></Historycomp>
           <Inputcomp></Inputcomp>
      
        </Globalstore.Provider>
      
        </Container>
        
    )
}

export default Main