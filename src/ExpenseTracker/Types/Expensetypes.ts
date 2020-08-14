



export type allin={
    Data:forinit,
    Delete:(obj:forobj1)=>void,
    Addition:(obj:forobj2)=>void
}

export type forinit =

    [{

        description:string,
        amount:number,
        id:number
    },
    
    ]

export type foraction1={
    type: string,
    payload:number
}
export type foraction2={
    type: string,
    payload:{
        description:string,
        amount:number,
        id:number
    }

    
}

export type forobj1={
    id:number
}
export type forobj2={
    
        description:string,
        amount:number,
        id:number
    
}
export type formap= {
    description: string;
    amount: number;
    id: number;
} | {
    description: string;
    amount: number;
    id: number;
}

