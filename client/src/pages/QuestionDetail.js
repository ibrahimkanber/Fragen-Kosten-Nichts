import { CardContent, Container, Grid, Typography, Card, CardHeader, CardMedia, TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { BreadcrumQuestionDetail } from '../components/Breadcrum/BreadcrumQuestionDetail'
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
} from "@material-ui/core/styles";
import { QuestionDetailItem } from '../components/QuestionDetailItem/QuestionDetailItem'
import { AnswerItem } from '../components/AnswerItem/AnswerItem'
import { getAnswersByQuestionId } from '../redux/actions/answerActions'
import ShareIcon from '@material-ui/icons/Share';
import ImageIcon from '@material-ui/icons/Image';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';

const stylesFunc = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maxWidth: "85%",
        marginTop: "5rem",
        marginBottom: "2rem",
        textAlign: "center",
        backgroundColor: "#fedbd0",
        paddingTop: 25,
        borderRadius: 10,

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
        paddingTop: 5
    },
    media: {
        height: 140,
    },
    margin: {
        margin: theme.spacing(1)
      }
}));

const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#3caea3"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "green"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "gray"
            },
            "&:hover fieldset": {
                borderColor: "#3caea3"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#3caea3"
            }
        }
    }
})(TextField);

export const QuestionDetail = (props) => {



    const dispatch = useDispatch()

    const location = useLocation()

    const mainStyles = stylesFunc();

    const state = useSelector(state => state.answerReducer.allAnswers.data)
    const userData = useSelector(state => state.authReducer.userData)


    const item = location.state.item


    //console.log(item._id)

    useEffect(() => {

        dispatch(getAnswersByQuestionId(item._id))


    }, [])


    return (
        <>
            <Container className={mainStyles.wrapperbreadcrum}>
                <BreadcrumQuestionDetail />
            </Container>


            <Container className={mainStyles.wrapper}>
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <QuestionDetailItem item={item} userData={userData} />

                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Card style={{ backgroundColor: "white" }}>
                            <CardContent>

                                <Typography variant="h5" component="p" style={{ color: "#3caea3", fontWeight: "600" }}>
                                    ANSWERS
                                        </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {

                        state?.map((item, index) => (
                            <Grid item lg={12} md={12} sm={12} xs={12} key={index}>
                                <AnswerItem item={item} />
                            </Grid>

                        ))

                    }

                    <Grid item lg={12} md={12} sm={12} xs={12} >
                        <Card style={{ textAlign: "left" }}>

                            <Card>
                                <CardHeader
                                    subheader={<p style={{ fontWeight: "bold", padding: 0, marginBlock: 0, color: "#3caea3",paddingLeft:3 }}>Your Answer</p>}
                                    style={{ textAlign: "left", marginLeft: 10, color: "black" }}


                                />
                            </Card>
                            <CardHeader
                                subheader={
                                    <IconButton aria-label="share" style={{ margin: 0, fontSize: 5 }}>
                                        <ImageIcon style={{ fontSize: 15 }} />
                                        <Typography style={{ marginLeft: 5 }}>Add Picture</Typography>
                                    </IconButton>}
                                style={{ textAlign: "left", paddingBottom: 0, paddingTop: 3 }}



                            />

                            <CardContent style={{ paddingTop: 0 }}>

                                <CssTextField
                                    className={mainStyles.margin}
                                    //label="Custom CSS"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    multiline
                                    rows={8}
                                    fullWidth
                                />

                            </CardContent>

                            <Button variant="contained" style={{ marginLeft: 25, color: "white", backgroundColor: "#3caea3", marginBottom: 20 }} >
                                Send Your Post
                            </Button>
                        </Card>

                    </Grid>


                </Grid>
            </Container>
        </>
    )
}

