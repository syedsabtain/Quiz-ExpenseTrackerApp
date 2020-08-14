import React from 'react'
import {useContext} from 'react'
import {Maindata} from '../Context/Quizcontext'
import {useState} from 'react';

const Cardcomp = () => {
    const {Data, Condition, Answers, choices} = useContext(Maindata);

    

    let [count,setCount] = useState(1);
    

    const handleNext = (event : React.FormEvent < HTMLFormElement >) => {
        event.preventDefault();

        setCount(count + 1);
        if (count < Data.Quizdata.results.length) {

            Data.setresult(Data.Quizdata.results[count]);
            console.log(count)
            if (ans === Data.Result.correct_answer) {
                Answers.Setanswers({
                    Correct: Answers.Answers.Correct + 1,
                    Wrong: Answers.Answers.Wrong
                })
                // console.log('corrrect', ans);
            } else if (ans !== Data.Result.correct_answer) {
                Answers.Setanswers({
                    Correct: Answers.Answers.Correct,
                    Wrong: Answers.Answers.Wrong + 1
                })
                // console.log('wrong', ans);
            }
        } else {
            if (ans === Data.Result.correct_answer) {
                Answers.Setanswers({
                    Correct: Answers.Answers.Correct + 1,
                    Wrong: Answers.Answers.Wrong
                })
                // console.log('corrrect', ans);
            } else if (ans !== Data.Result.correct_answer) {
                Answers.Setanswers({
                    Correct: Answers.Answers.Correct,
                    Wrong: Answers.Answers.Wrong + 1
                })
                // console.log('wrong', ans);
            }
            Condition.setfinised(true)
            setCount(1);
        }
    }
    let [ans,
        setAns] = useState('');
    const handleanswer = (e : React.ChangeEvent < HTMLInputElement >) => {
        setAns(e.target.value);
    }
    

    return (

          
                    <div className='container'>
                        <div className='row mt-5 justify-content-center text-center'>
                            <div className='col-md-6'>
                                <h2>({count}/{Data.Quizdata.results.length}) {Data.Result.question}</h2>
                                <form onSubmit={handleNext}>
                                    <ul className='list-group'>
                                        {choices.map((values : string, ind : number) => {
                                            return (

                                                <label
                                                    className='list-group-item d-flex justify-content-between'
                                                    htmlFor={values}
                                                    key={ind}>{values}
                                                    <input
                                                        className=''
                                                        type="radio"
                                                        required
                                                        name="choice"
                                                        id={values}
                                                        value={values}
                                                        checked={ans === values}
                                                        onChange={handleanswer}/></label>
                                            )
                                        })}
                                    </ul>
                                    <button className='btn btn-outline-info mt-5'>Next</button>
                                </form>
                            </div>
                        </div>

                    </div>
              
     
    )
}

export default Cardcomp