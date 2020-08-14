import React from 'react'
import { useContext } from 'react'
import { Maindata } from '../Context/Quizcontext'



const Maincomp = ()=>
{

    const{Selection} = useContext(Maindata);

    const handleQnumber=(e: React.ChangeEvent<HTMLInputElement>)=>
    {
            Selection.Setparams({
                Qnumber:parseInt(e.target.value,),
                Category:Selection.Params.Category,
                Diffculty:Selection.Params.Diffculty,
                Typee:Selection.Params.Typee
            })
            
    }
    const handlecategory=(e: React.ChangeEvent<HTMLSelectElement>)=>{

        Selection.Setparams({
            Qnumber:Selection.Params.Qnumber,
            Category:parseInt(e.target.value),
            Diffculty:Selection.Params.Diffculty,
            Typee:Selection.Params.Typee
        })
    }
    const handledifficulty=(e: React.ChangeEvent<HTMLSelectElement>)=>{

        Selection.Setparams({
            Qnumber:Selection.Params.Qnumber,
            Category:Selection.Params.Category,
            Diffculty:e.target.value,
            Typee:Selection.Params.Typee
        })
    }
    const handletype=(e: React.ChangeEvent<HTMLSelectElement>)=>{

        Selection.Setparams({
            Qnumber:Selection.Params.Qnumber,
            Category:Selection.Params.Category,
            Diffculty:Selection.Params.Diffculty,
            Typee:e.target.value
        })

    }
    const{Condition,Data} = useContext(Maindata);
    const handleloading=()=>
    {   
        if(Data.Quizdata.response_code === 0){
        Condition.setstarted(true);
        Data.setresult(Data.Quizdata.results[0]);
        
        }
        else(
            alert('This Specific Data is not Available Kindly try different Configuration')
        )
      
    }
    return(
        <div className='container'>
        <div className='row justify-content-center text-center'>
            <div className='col-md-6 mt-5'>
                <h1 className='mt-5'>Quiz App</h1>
                <br/>
                <label>Number of Questions:</label><br/>
                <input
                    className='input'
                    type="number"
                    name="trivia_amount"
                    id="trivia_amount"
                    min="6"
                    max="50"
                    onChange={handleQnumber}
                    value={Selection.Params.Qnumber}
                    /> <br/>

                <label>Select Category:</label><br/>
                <select name="trivia_category"
                        className='custom-select'
                        onChange={handlecategory}>
                    <option value="any">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals &amp; Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science &amp; Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                    <option value="32">Entertainment: Cartoon &amp; Animations</option>
                </select>
                <br/>
                <label>Select Diffculty:</label><br/>
                <select name="trivia_difficulty"
                className='custom-select'
                onChange={handledifficulty}>
                    <option value="any">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select><br/>
                <label className=''>Select Type:</label><br/>
                <select name="trivia_type"
                className='custom-select'
                onChange={handletype}>
                    <option value="any">Any Type</option>
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True / False</option>
                </select><br/>

                <button className='btn btn-outline-info mt-5' onClick={handleloading}>Start Quiz</button>

            </div>
        </div>
    </div>
    )
}

export default Maincomp