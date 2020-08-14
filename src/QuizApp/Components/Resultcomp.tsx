import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { Maindata } from '../Context/Quizcontext'

const Resultcomp=()=>{

    const{Answers} = useContext(Maindata);
    return(

        <div className='container mt-5'>
            <div className='row justify-content-center text-center'>
                <div className='col-md-6'>
                    <h1>Quiz Result</h1>
                    <h4>Correct Answer = {Answers.Answers.Correct}</h4>
                    <h4>Wrong Answer = {Answers.Answers.Wrong}</h4>
                    <Link className='btn btn-outline-danger mt-5' to='/'>Go To HomePage</Link>
                </div>
            </div>

        </div>

    )
}

export default Resultcomp