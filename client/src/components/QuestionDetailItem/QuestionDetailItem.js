import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import {  useSelector } from "react-redux"

import {undoLike,questionLike} from "../../utils/questionlike"

import { getSingleQuestion } from '../../utils/getSingleQuestion';

const useStyles = makeStyles((theme) => ({
  root: {

    backgroundColor: "#ecefff",
    //backgroundColor: "#fedbd0",
   /*  boxShadow:"5px 5px 2px 1px #3caea3a0" */
    boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px;"

  },
  
  text: {
    fontWeight: "600",
    fontSize: 16

  }



}));

export function QuestionDetailItem({ item}) {
  const userData=useSelector(state=>state.authReducer.userData)
  const [questionInfo,setQuestionInfo]=useState(item)

  //const [refresh,setRefresh]=useState(true)

  
  const classes = useStyles();
 
  

 

  const includeStatus=questionInfo.likes.includes(userData?.id)

  const handleFav=()=>{
    if(includeStatus){

        undoLike(item._id).then(data=>{
        //setRefresh(state=>!state)


      })

   
    }else {

        questionLike(item._id).then(data=>{
        //setRefresh(state=>!state)
      })


    }
  }

  useEffect(()=>{

    getSingleQuestion(item._id).then(res=>setQuestionInfo(res))

  })


  return (
    <Card className={classes.root}  >
      
      <CardHeader>{questionInfo.title}</CardHeader>

      <CardContent 
        className={classes.content}>
        <Typography
          variant="h5"
          color="textSecondary"
          component="p"
          style={{ textAlign: "left", fontWeight: "bold", fontFamily: "Roboto", fontSize: 24, color: "#3caea3",marginBottom:10 }}




        >
          {questionInfo.title}

        </Typography>
        
        <Typography
          variant="h5"
          color="textSecondary"
          component="p"
          style={{ textAlign: "left", fontWeight: "bold", fontFamily: "Roboto", fontSize: 17, color: "black" }}




        >
          {questionInfo.content}

        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFav}>
          <FavoriteIcon style={{color:questionInfo.likes.includes(userData?.id)? "red":'gray'}} />
        </IconButton>

        <Typography variant="body2" color="text" component="p" className={classes.text}>
          {questionInfo.likes.length}
        </Typography>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions>

    </Card>
  );
}


