import React, {useEffect } from "react";
import { useHistory } from "react-router-dom";
import {

  TextField,
  Grid,
  Container,
  Avatar,
  Typography,
} from "@material-ui/core";

import { Formik } from "formik";
import * as Yup from "yup";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import API from "../utils/API"
import {login} from "../redux/actions/authActions"
import {useDispatch, useSelector} from "react-redux";

import {StyledButton,stylesFunc} from "./LoginStyle"

const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required!!"),
  password: Yup.string()
    .required("No password provided.")
    .min(5, "Password is too short - should be 8 chars minimum."),
});



const initialValues = {
  email: "",
  password: "",
};

export const Login=() =>{
  const dispatch=useDispatch()
  //const [loginError, setLoginError] = useState(null);
  const history = useHistory();
  const signinStyles = stylesFunc();

  const handleGoogleButtonClick = () => {
    API.get("/api/auth/profile").then(console.log).catch(({response})=>console.log(response))
  };

  const handleFormSubmit = (values) => {
    dispatch(login(values.email,values.password))

    history.push("/")

  };

  const {loginStatus}=useSelector(state=>state.authReducer)

  useEffect(()=>{
   
    if (loginStatus){
      history.push("/")
    }

    

  },[loginStatus])

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
           {/*  <p style={{ textAlign: "center", color: "red" }}>
            <small>{loginError}</small>
            </p> */}
           
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

