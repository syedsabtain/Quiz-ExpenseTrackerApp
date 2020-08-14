import React,{useContext} from 'react'
import {
    Grid,
    Paper,
    makeStyles,
    List,
    ListItemIcon,
    ListItem,
    ListItemSecondaryAction,
    IconButton,
    ListItemText,
    Typography
} from '@material-ui/core'

import ClearIcon from '@material-ui/icons/Clear';
import {Globalstore} from '../Context/Globalstore';
import {formap} from '../Types/Expensetypes';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    his:{
            color:'#355C7D',
            fontSize:'24px'
    },
    inp:{
        color:'black',
        fontSize:'24px'
    },
    ex:{
        color:'white',
        backgroundColor:'red'
    },
    am:{
        color:'black'
    },
    li:{
        backgroungColor:'white',
        color:'white'
    }
}));

const Historycomp = () => {
    const classes = useStyles();
    const{Data,Delete}= useContext(Globalstore);
    const thousands_separators=(num:number):string=>
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }


    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.his}>
                            HISTORY
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    
                    <List className={classes.root}>
                        {Data.map((value:formap,ind:number) => {
                            

                            return (
                                <ListItem key={ind} role={undefined} dense button className={classes.li}>
                                    <ListItemIcon onClick={()=>Delete({id:value.id})}>
                                        <ClearIcon className={classes.ex}></ClearIcon>
                                    </ListItemIcon>
                                    <ListItemText className={classes.inp} id={ind.toString()} primary={`${value.description}`}/>
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="comments">
                                            <Typography variant="h6" className={classes.am}>
                                                ${thousands_separators(value.amount)}
                                            </Typography>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            );
                        })}
                    </List>
                </Grid>

            </Grid>
        </div>
    )
}
export default Historycomp