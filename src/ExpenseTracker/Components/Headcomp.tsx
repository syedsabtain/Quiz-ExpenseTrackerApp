import React, { useContext } from 'react'
import {Grid, Paper, makeStyles, Typography,Divider} from '@material-ui/core'
import {Globalstore}  from '../Context/Globalstore'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    mapa: {
        marginTop: '35px'
    },
    ed:{
            backgroundColor:'#005b96',
            color:'white',
            
             padding: theme.spacing(2),
        textAlign: 'center',
    },
    edsize:{
        fontSize:'28px',
    },
    yb:{
            color:'white ',
            backgroundColor:'#009688',
             padding: theme.spacing(2),
        textAlign: 'center',
    },
    in:{
        color:'white',
        backgroundColor:' #2ab7ca',
         padding: theme.spacing(2),
        textAlign: 'center',
    },
    ex:{
           backgroundColor:'#fe4a49',
           color:'white',
             padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

const Headcomp = () => {
    const classes = useStyles();
    const{Data}= useContext(Globalstore);
    const thousands_separators=(num:number):string=>
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
    

    
    const getincome=():number=>
    {
        let income:number=0;
        for (let index = 0; index < Data.length; index++) {
           
            if(Data[index].amount>0)
            {
                income+=Data[index].amount
            }
            
            
        }
        return income

    }
    const getexpense=():number=>
    {
        let expense:number=0;
        for (let index = 0; index < Data.length; index++) {
            
            if(Data[index].amount<0)
            {
                expense+=Data[index].amount
            }
            
            
        }
        return expense
    }

    return (
        <div>
            <Grid container spacing={3} className={classes.mapa}>
                <Grid item xs={12}>
                    <Paper className={classes.ed}>
                        <Typography variant="h6" className={classes.edsize}>
                            Expense Tracker App
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.yb}>
                        <Typography variant="h6" >
                            Your Balance
                            <Divider></Divider>
                            ${thousands_separators(getincome()+getexpense())}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.in}>
                        <Typography variant="h6" >
                            INCOME  ${thousands_separators(getincome())}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.ex}>
                        <Typography variant="h6" >
                            EXPENSE ${thousands_separators(getexpense())}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Headcomp