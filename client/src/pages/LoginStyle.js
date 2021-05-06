import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';

import {
    Button

  } from "@material-ui/core";

export const stylesFunc = makeStyles((theme) => ({
    wrapper: {
      marginTop: "4rem",
      height: "100vh",
      textAlign: "center",
     
    },
    avatar: {
      margin: "1rem auto",
      backgroundColor: theme.palette.primary.main,
    },
    signIn: {
      margin: "1rem",
    }, 
    register: {
      textDecoration: 'none',
      fontWeight: '600',
      paddingLeft : '0.5rem',
      
      opacity:1,
      
    }
    
  }));
  


export const StyledButton = withStyles({
    root: {
      background: '#021636',
      borderRadius: 3,
      border: 0,
      color: '#02ab48',
      
      padding: '8px 30px',
      '&:hover': {
        backgroundColor:"#021636",
    },
      
    },
    label: {
      textTransform: 'capitalize',
      fontSize:20
    },
  })(Button);