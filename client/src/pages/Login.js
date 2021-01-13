import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Container,
  Avatar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import { Formik } from "formik";
import * as Yup from "yup";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from "axios"



const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required!!"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

const stylesFunc = makeStyles((theme) => ({
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



const StyledButton = withStyles({
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


const initialValues = {
  email: "",
  password: "",
};

export const Login=() =>{
  const [loginError, setLoginError] = useState(null);
  const history = useHistory();
  const signinStyles = stylesFunc();

  const handleGoogleButtonClick = () => {
    
    alert('You are succesfully logged in!');
    history.push('/');
  };

  const handleFormSubmit = (values) => {
    axios.post("http://localhost:5000/api/auth/login",{
      email:"scarlett6@gmail.com",
      password:"1234569"
    }).then(console.log).catch(({response})=>console.log(response))
    
      
  
  };

  return (
    <Container className={signinStyles.wrapper} maxWidth="sm">
      <Avatar className={signinStyles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className={signinStyles.signIn} variant="h4">
       Login
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={signInValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                  helperText={errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledButton
                  type="submit"
                  //variant="contained"
                 
                  fullWidth
                >
                  Login
                </StyledButton>
              </Grid>
              <Grid item xs={12}>
                <StyledButton
                  variant="contained"
                 
                  fullWidth
                  onClick={handleGoogleButtonClick}
                >
                  Sign In with Google
                </StyledButton>
              </Grid>
            </Grid>
            <p style={{ textAlign: "center", color: "red" }}>
              <small>{loginError}</small>
            </p>
            {/* 
            //TODO: Add register & forgot password text & links
            */}
          </form>
        )}
      </Formik>
      <p>
        Don't have an account?      
        <a className = {signinStyles.register} href="/register">Register</a>
      </p>
            
      <p>
         <a className = {signinStyles.register} href="/forgot-password">Forgot Password?</a>
      </p>
    </Container>
  );
}

