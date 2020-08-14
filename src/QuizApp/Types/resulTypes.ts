export type QuizResult = {
    response_code: number,
    results: [
        {
            category: string,
            correct_answer: string,
            difficulty: string,
            incorrect_answers: string[],
            question: string,
            type: string
        }
    ]

}

export type contexttype = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string
}
export type params={
    Qnumber:number,
    Category:number,
    Diffculty:string,
    Typee:string
}
export type forcondition ={
    Loading: boolean,
        Started: boolean,
        Finised: boolean,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setstarted: React.Dispatch<React.SetStateAction<boolean>>,
        setfinised: React.Dispatch<React.SetStateAction<boolean>>
}
export type forstore ={
    Result: contexttype,
        setresult: React.Dispatch<React.SetStateAction<contexttype>>,
        Quizdata: QuizResult
}
export type forselection = {
    Params: {
        Qnumber:number,
        Category:number,
        Diffculty:string,
        Typee:string
    },
    Setparams: React.Dispatch<React.SetStateAction<params>>
}
export type foranswer={
    Answers: {
        Correct: number;
        Wrong: number;
    },
        Setanswers: React.Dispatch<React.SetStateAction<{
            Correct: number;
            Wrong: number;
        }>>
        
}


export type allin ={
    Condition:forcondition,
    Data:forstore,
    Selection:forselection,
    Answers:foranswer,
    choices:string[]
}