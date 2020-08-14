
import {QuizResult} from '../Types/resulTypes'

const Fetcingdata = async(amount:number,category:number,difficulty:string,type:string) : Promise < QuizResult >=> {

    let data: Response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`);
    const result: QuizResult = await data.json();
    

    return result;

}

export default Fetcingdata
