import {createContext} from 'react'
import { allin} from '../Types/resulTypes'


const Initialdata:allin = {
    Condition: {
        Loading: true,
        Started: true,
        Finised: true,
        setLoading: () => {},
        setstarted: () => {},
        setfinised: () => {}
    },
    Data: {
        
        Result: {
            category: 'string',
            correct_answer: 'string',
            difficulty: 'string',
            incorrect_answers: ['',''],
            question: 'string',
            type: 'string'
        },
        setresult: () => {},
        Quizdata: {
            response_code: 1,
            results: [
                {
                    category: 'string',
                    correct_answer: 'string',
                    difficulty: 'string',
                    incorrect_answers: ['',''],
                    question: 'string',
                    type: 'string'
                }
            ]
        }
    },
    Selection:{
            Params:{
                Qnumber:0,
                Category:1,
                Diffculty:'string',
                Typee:'string',
            } ,
            Setparams: () => {}
        },
        Answers: {
            Answers: {
                Correct: 1,
                Wrong: 1,
            },
                Setanswers:()=>{}
        },
        choices: ['']
    }
    export const Maindata  = createContext(Initialdata)