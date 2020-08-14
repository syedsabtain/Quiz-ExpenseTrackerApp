
import {createContext} from 'react'
import {allin,forobj1,forobj2} from '../Types/Expensetypes'

const initialdata:allin ={
    Data: [{

        description:'string',
        amount:12,
        id:1
    },
    ],
    Delete:(obj:forobj1):void=>{},
    Addition:(obj:forobj2):void=>{}

}

export const Globalstore = createContext(initialdata);

