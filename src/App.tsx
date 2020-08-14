import React from 'react';
import './App.css';
import './bootstrap.min.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Quizapp from './QuizApp/mainn'
import Expenseapp from './ExpenseTracker/main'
import Main from './main'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import {makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1
  },
  fb: {
      color:'#4267B2',
      fontSize:'50px',
      marginRight:'15px'
  },
  twit:{
color:'#00acee',
marginRight:'15px',
fontSize:'50px',
  },
  insta: {
      color:'#DD2A7B',
      marginRight:'15px',
      fontSize:'50px',
  },
  pint: {
    color:'#E60023 ',
    marginRight:'15px',
    fontSize:'50px',
  },
  linked:{
    color:'#0e76a8  ',
    marginRight:'15px',
    fontSize:'50px',
  }
}));
function App() {
  const classes = useStyles();
    return (
      <Router>
        <Routes>
         <Route path='/' element={<Main></Main>}></Route>
         <Route path='ExpenseTrackerApp' element={<Expenseapp></Expenseapp>}></Route>
         <Route path='QuizApp' element={<Quizapp></Quizapp>}>
          </Route>
        </Routes>
        <footer className="page-footer font-small cyan darken-3">

<div className="container ">

    <div className="row justify-content-center text-center">

        <div className="col-md-12 py-3 mt-5">
            <div className=" flex-center">

                {/* <a className="fb-ic"> */}
                    <FacebookIcon fontSize='large' className={classes.fb} ></FacebookIcon>
                {/* </a> */}
                {/* <a className="tw-ic"> */}
                    <TwitterIcon fontSize='large' className={classes.twit}></TwitterIcon>
                {/* </a> */}
                {/* <a className="li-ic"> */}
                    <LinkedInIcon fontSize='large' className={classes.linked}></LinkedInIcon>
                {/* </a> */}
                {/* <a className="ins-ic"> */}
                    <InstagramIcon fontSize='large' className={classes.insta} ></InstagramIcon>
                {/* </a> */}
                {/* <a className="pin-ic"> */}
                    <PinterestIcon fontSize='large' className={classes.pint}></PinterestIcon>
                {/* </a> */}
            </div>
        </div>

    </div>

</div>

<div className="footer-copyright text-center py-3">© 2020 Copyright:
    <span> Syed Sabtain</span>
</div>

</footer>

        </Router>
    );
}



export default App;
