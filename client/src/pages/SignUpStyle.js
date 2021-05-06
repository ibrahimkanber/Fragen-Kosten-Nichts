import { makeStyles } from "@material-ui/core/styles";

import { withStyles } from '@material-ui/core/styles';


export const StyledButton = withStyles({
    root: {
      background: '#021636',
      borderRadius: 3,
      border: 0,
      color: '#02ab48',
     
      padding: '8px 30px',
      
    },
    label: {
      textTransform: 'capitalize',
      fontSize:20
    },
  })(Button);

export const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: "3rem",
    height: "calc(100vh - 19.0625rem)",
    textAlign: "center",
    marginBottom: "12rem",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.secondary.main,
  },
  signUp: {
    margin: "1rem",
  },
  login: {
    textDecoration: 'none',
    fontWeight: '600',
    paddingLeft : '0.5rem'
  }  
}));