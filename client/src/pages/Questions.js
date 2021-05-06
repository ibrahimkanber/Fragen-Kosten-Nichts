import React, { useEffect, useState } from 'react'
import { getAllQuestions } from "../redux/actions/questionActions"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { QuestionItem } from '../components/QuestionItem/QuestionItem'
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,

} from "@material-ui/core";
import { BreadcrumQuestions } from '../components/Breadcrum/BreadcrumQuestions'


const stylesFunc = makeStyles((theme) => ({
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

  }
}));


export const Questions = () => {
  const dispatch = useDispatch()

  const mainStyles = stylesFunc();
  const { data } = useSelector(state => state.questionReducer.allQuestions)
  const userData = useSelector(state => state.authReducer.userData)
  //const refresh = useSelector(state => state.questionReducer.isQuestionCreated)

  const [render, setRender] = useState(true)
  //console.log(data?.length)





  useEffect(() => {
    
    
    dispatch(getAllQuestions())
    //setlist(data)
  }, [render])

  console.log(data)

  return (
    <>
      <Container className={mainStyles.wrapperbreadcrum}>
        <BreadcrumQuestions />
      </Container>



      <Container className={mainStyles.wrapper}>
        <Grid container spacing={2}>

          {

            data?.map((item, index) => {


              return (
                
                  <Grid item xs={12} md={6} lg={6} key={index} >
                    
                    <QuestionItem item={item} userData={userData}  />
                  </Grid>
                
              )
            }


            )

          }

        </Grid>
      </Container>
    </>
  )
}
