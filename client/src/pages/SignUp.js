import React from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Avatar,

  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import { withStyles } from '@material-ui/core/styles';
import * as Yup from "yup";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";


const signUpValidationSchema = Yup.object().shape({
  displayName: Yup.string().required("Display Name is required!!"),
  email: Yup.string().email("Invalid Email").required("Email is required!!"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});


const StyledButton = withStyles({
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

const stylesFunc = makeStyles((theme) => ({
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

export const  Signup=(props)=> {

  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
      firstName:"",
      lastName:"",
      title:"",
      file:"",
    
    },
    validationSchema: signUpValidationSchema,

    onSubmit: async (values) => {
      console.log(values)
     
      
      
  
    },
  });
  const signupStyles = stylesFunc();

  const handleGoogleButtonClick = () => {
    console.log("google")
  };

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

