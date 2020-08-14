import React from 'react'
import {
    
    Grid,
    Typography,
    makeStyles,
    TextField,
    Button,
    Divider,
    FormControl,
    
} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';
import { useContext } from 'react';
import {Globalstore} from '../Context/Globalstore'
import { useState } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    button: {
        margin: theme.spacing(1),
        marginBottom: '30px',
        marginTop: '40px'
    },
    amount: {
        marginTop: '15px'
    },
    ad:{
        color:'black'
    }
}));
const Inputcomp = () => {
    const classes = useStyles();
    const{Addition} = useContext(Globalstore);
    let[description,setDescription] = useState<string>('');
    let[amount,setAmount]=  useState<string>('');
    let[id,setId]= useState<number>(2);

     
    const handledescription=(e:React.ChangeEvent<HTMLInputElement>)=>{

        setDescription(e.target.value);

    }
    const handleamount=(e:React.ChangeEvent<HTMLInputElement>)=>{    
        setAmount(e.target.value); 
    
           
            
    }
    const handleaddition=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
        if(amount==='')
        {
            setAmount('')
        }
        else if(parseInt(amount).toString() === NaN.toString()){
            
            alert('please Enter Number in Amount Section');
            setAmount('');
       }
        else
        {
            
            setId(id+1);
            Addition({
                description:description,
                amount:parseInt(amount),
                id:id
            })
            setDescription('')
            setAmount('');
        }
    
    }
    return (
        <Grid container spacing={3}>
            <Grid className={classes.paper} item xs={12}>
                <Typography variant="h6" className={classes.ad}>
                    ADD TRANSACTIONS 
                </Typography>
                <Typography  className={classes.ad}>(negative-expense,positive-income)</Typography>
                <form  autoComplete="off" onSubmit={handleaddition} >
                    
                    <FormControl fullWidth>
                        <TextField required value={description} id="standard-basic" label="Enter Text/Description" onChange={handledescription}/>
                        <Divider></Divider>
                        <TextField
                        onChange={handleamount}
                            required
                            
                            value={amount}
                            className={classes.amount}
                            id="standard-basic"
                            label="Enter Amount"/></FormControl>

                    <Divider></Divider>
                    <FormControl>
                    <Button
                       
                        type='submit'
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={< SaveIcon />}>
                        Add Transaction
                    </Button></FormControl>
                    <Divider></Divider>
                    <Button
                       
                        
                       variant="contained"
                       color="primary"
                       size="small"
                      
                       startIcon={< ExitToAppIcon />}>
                     <Link to='/' className='text-white'>Go TO HomePage</Link>
                   </Button>
                    
                </form>
            </Grid>
        </Grid>
    )
}

export default Inputcomp