import {Link} from 'react-router-dom'
import React from 'react'
import {useState} from 'react'
import firebase from './Services/firebaseService'
import { useEffect } from 'react'


const Main = () => {
    let [tokenn,setToken] = useState({
        tokene:'',
        loader:true
    });
    let[isloading,setLoadind]=useState(true);
    
 useEffect(()=>{
     
    let messaging = firebase.messaging();

    const getNotification = () => {
        Notification
            .requestPermission()
            .then((permission) => {
                if (permission === 'granted') {
                    messaging
                        .getToken()
                        .then((currentToken) => {
                            
                            if (currentToken) {
                                
                                setToken({
                                    tokene:currentToken,
                                    loader:false
                                });
                                
                                
                            } else {
                                console.log('No Instance ID token available. Request permission to generate one.')
                            }
                        } )
                        .catch((error) => {
                            console.log('An error occurred while retrieving token. ', error);
                        })
                }
            }) 
           
    }
     setTimeout(() => {
        setLoadind(false);
     }, 1000);

    getNotification();
 },[])

    return (
        <div>
            {isloading ? (
                 <div className='container'>
                 <div className='row mt-5 justify-content-center text-center'>
                     <div className='col-md-6'>
                         <div className="spinner-border text-info" role="status">
                             <span className="sr-only">Loading...</span>
                         </div>
                     </div>
                 </div>
             </div>
            ) : (
                <div className="text-center">
                <div className='container'>
    
                    <div className='row justify-content-center'>
                        <div className='col-md-6 mt-5'>
                            <h1>Welcome TO PWA and Push Notification Website</h1>
    
                            <Link className='btn btn-outline-danger mt-2 mb-2' to='ExpenseTrackerApp'>Go to Expense Tracker App</Link>
    
                            <br/>
    
                            <Link className='btn btn btn-outline-danger mt-2' to='QuizApp'>Go to QuizApp</Link>
                            <br/>
    
                        </div>
                    </div>
                    <div className='row  justify-content-center'>
                        <div className='col-md-12  mt-5'>
                            <h1>Your Token For Push Notification</h1>
                            
                           
                            {
                                tokenn.loader ? ( <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>) : <div className='row'>
                            <div className='token'>{tokenn.tokene}</div>
                            </div>
                            }
                        </div>
                    </div>
    
                </div>
    
            </div>
            )}
        </div>
    )
}

export default Main