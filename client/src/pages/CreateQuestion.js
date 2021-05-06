import React from "react";
import {
    
    TextField,
    Grid,
    Container,
    
} from "@material-ui/core";

import { useFormik } from "formik";

import * as Yup from "yup";


import { useDispatch } from "react-redux"
import { createQuestion, getAllQuestions } from "../redux/actions/questionActions"

import { useHistory } from "react-router-dom";

import { StyledButton, stylesFunc } from "./LoginStyle"
import { BreadcrumAsk } from "../components/Breadcrum/BreadcrumAsk";
import { makeStyles } from "@material-ui/core/styles";

const signUpValidationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required!!"),
    content: Yup.string().required("Content is required!!")

});

const stylesFuncBread = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maxWidth: "85%",
        marginTop: "5rem",
        marginBottom: "2rem",
        textAlign: "center",
    },
    avatar: {
        margin: "1rem auto",
        backgroundColor: theme.palette.secondary.main,
    },
    circular: {
        margin: 'auto',
    },
    wrapperbreadcrum: {
        display: "flex",
        justifyContent: "center",
        paddingTop: 5,
        //backgroundColor:"red"
    }
}));


export const CreateQuestion = (props) => {
    //const { success } = useSelector(state => state.questionReducer)
    const history = useHistory()

    const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            title: "",
            content: "",

        },
        validationSchema: signUpValidationSchema,

        onSubmit: ({ title, content }) => {
            dispatch(createQuestion(title, content))
            dispatch(getAllQuestions())
            history.push("/questions")

        },
    });




    const signupStyles = stylesFunc();
    const mainStyles=stylesFuncBread()


    return (
        <>
            <Container className={mainStyles.wrapperbreadcrum} maxWidth="xs">

                <BreadcrumAsk />
            </Container>

            <Container className={signupStyles.wrapper} maxWidth="sm">

          
      

                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                name="title"
                                label="Question Title"
                                variant="outlined"

                                fullWidth
                                {...formik.getFieldProps("title")}
                                error={formik.touched.title && formik.errors.title}
                                helperText={
                                    formik.touched.title && formik.errors.title
                                }
                            />
                        </Grid>


                        <Grid item xs={12}>
                            <TextField
                                name="Question"
                                label="Question Content"
                                variant="outlined"
                                multiline
                                rows={4}
                                fullWidth
                                {...formik.getFieldProps("content")}
                                error={formik.touched.content && formik.errors.content}
                                helperText={formik.touched.content && formik.errors.content}
                            />
                        </Grid>


                        <Grid item xs={12}>
                            <StyledButton type="submit" fullWidth variant="contained">
                                Send
                        </StyledButton>
                        </Grid>

                    </Grid>
                </form>
            </Container>
        </>
    );
}

