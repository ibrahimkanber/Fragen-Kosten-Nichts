import React, { useEffect } from "react";
import {
 
  TextField,
  Grid,
  Container,
  Avatar,

  Typography,
} from "@material-ui/core";

import { useFormik } from "formik";

import * as Yup from "yup";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import {useDispatch,useSelector} from "react-redux"
import {signUp} from "../redux/actions/authActions"

import {useHistory} from "react-router-dom";

import {StyledButton,stylesFunc} from "./LoginStyle"




const signUpValidationSchema = Yup.object().shape({
  displayName: Yup.string().required("Display Name is required!!"),
  email: Yup.string().email("Invalid Email").required("Email is required!!"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});




export const  Signup=(props)=> {
  const {loginStatus}=useSelector(state=>state.authReducer)
  const history=useHistory()

  const dispatch = useDispatch()


  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
  
    },
    validationSchema: signUpValidationSchema,

    onSubmit:  ({displayName,email,password}) => {
      dispatch(signUp(displayName,email,password))

      history.push("/")


    },
  });
  const signupStyles = stylesFunc();

  const handleGoogleButtonClick = () => {
  
  };

  useEffect(()=>{
   
    if (loginStatus){
      history.push("/")
    }

  },[loginStatus])
 



  return (
    <Container className={signupStyles.wrapper} maxWidth="sm">
      <Avatar className={signupStyles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className={signupStyles.signUp} variant="h4">
        Sign Up
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="displayName"
              label="Display Name"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("displayName")}
              error={formik.touched.displayName && formik.errors.displayName}
              helperText={
                formik.touched.displayName && formik.errors.displayName
              }
            />
          </Grid>


          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("email")}
              error={formik.touched.email && formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              {...formik.getFieldProps("password")}
              error={formik.touched.password && formik.errors.password}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <Input
              name="title"
              label="Title"
              variant="outlined"
              type="file"
              fullWidth
              onChange={(event)=>formik.setFieldValue("file",event.target.files[0])}
            />
          </Grid> */}
          <Grid item xs={12}>
            <StyledButton type="submit" fullWidth variant="contained">
              Register
            </StyledButton>
          </Grid>
          <Grid item xs={12}>
            <StyledButton
              variant="contained"
              fullWidth
              onClick={handleGoogleButtonClick}
            >
              SignUp with Google
            </StyledButton>
          </Grid>
        </Grid>
      </form>
      <p>
        Already have an account? <a className={signupStyles.login}  href="/login"> Login.</a>
      </p>
    </Container>
  );
}

