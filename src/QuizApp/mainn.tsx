import React from 'react'
import {useEffect} from 'react'
import Fetcingdata from './Services/fetchingdata'
import {useState} from 'react'
import {QuizResult, contexttype, params, forcondition} from './Types/resulTypes'
import Maincomp from './Components/maincomp'
import Cardcomp from './Components/Cardcomp'
import {Maindata} from './Context/Quizcontext'
import Resultcomp from './Components/Resultcomp'

const Main = () => {
    let [quizdata,
        setQuizdata] = useState <QuizResult>({
        response_code: 1,
        results: [
            {
                category: 'test',
                correct_answer: 'test',
                difficulty: 'test',
                incorrect_answers: [
                    'test', 'test'
                ],
                question: 'tests',
                type: 'test'
            }
        ]
    });
    let [loading,
        setLoading] = useState <boolean>(true);
    let [finised,
        setFinised] = useState<boolean>(false);
    let [started,
        setStarted] = useState<boolean>(false);
    let [loadq,
        setLoadq] = useState<boolean>(true);
    let condition : forcondition = {
        Loading: loadq,
        Started: started,
        Finised: finised,
        setLoading: setLoadq,
        setstarted: setStarted,
        setfinised: setFinised
    }
    let [resultdata,
        setResultdata] = useState <contexttype> ({
        category: 'test',
        correct_answer: 'test',
        difficulty: 'test',
        incorrect_answers: [
            'test', 'test'
        ],
        question: 'question of the test',
        type: 'test'
    });
    let [paramss,
        setParams] = useState < params > ({Qnumber: 6, Category: 0, Diffculty: 'easy', Typee: 'multiple'})
    const Store = {
        Result: resultdata,
        setresult: setResultdata,
        Quizdata: quizdata
    }
    const selection = {
        Params: paramss,
        Setparams: setParams
    }
    let [Answers,
        setAnswers] = useState({Correct: 0, Wrong: 0})
    const answer = {
        Answers: Answers,
        Setanswers: setAnswers
    }

    useEffect(() => {

        const Setting = async() => {
            const data = await Fetcingdata(paramss.Qnumber, paramss.Category, paramss.Diffculty, paramss.Typee);
            setQuizdata(data);
            if (data.response_code === 0) {
                setLoading(false);
            }
        }
        Setting();

    }, [paramss])
    const shuffleArray = (array : string[]) => [...array].sort(() => Math.random() - 0.5);
    let choices : string[] = shuffleArray(resultdata.incorrect_answers.concat(resultdata.correct_answer));

    return (
        <Maindata.Provider
            value={{
            Condition: condition,
            Data: Store,
            Selection: selection,
            Answers: answer,
            choices: choices
        }}>
            
            {loading  ? (
                    <div className='container'>
                        <div className='row mt-5 justify-content-center text-center'>
                            <div className='col-md-6'>
                                <div className="spinner-border text-info" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                : 
                    
                   (    <> {!started
                            ? (
                             <Maincomp></Maincomp>
                            )
                            : null}

                        {started && !finised
                            ?(
                                <Cardcomp></Cardcomp>
                            )
                            : null}
                        {finised
                            ? (
                                <Resultcomp></Resultcomp>
                            )
                            : null}
                   </>)
                   
                }

        </Maindata.Provider>
    )
}

export default Main