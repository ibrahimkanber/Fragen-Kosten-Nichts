import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getAnswersByQuestionId } from "../../redux/actions/answerActions"

import { questionLike, undoLike } from '../../utils/questionlike';

import DeleteIcon from '@material-ui/icons/Delete';
import { deleteQuestion } from '../../utils/deleteQuestion';
import { getAllQuestions } from '../../redux/actions/questionActions';




const useStyles = makeStyles((theme) => ({
  root: {

    backgroundColor: "rgba(254,200,208,0.5)"


  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  hover: {
    '&:hover': {
      cursor: "pointer"
    },


  },
  hoverContent: {
    //backgroundColor:"#fedbd0",
    height: 65,
    '&:hover': {
      cursor: "pointer"
    },
    [theme.breakpoints.down('lg')]: {
      height: 90,
    },
    [theme.breakpoints.down('md')]: {
      height: 140,

    },

  },
  text: {
    fontWeight: "600",
    fontSize: 16

  }



}));




export function QuestionItem({ item,userData }) {
  //console.log(item.user._id)
  //console.log(item)
  let includeStatus = item.likes.includes(userData?.id)

  const history = useHistory()
  const dispatch = useDispatch()

  //console.log(userData)

 
  
  const classes = useStyles();




  const handleQuestiondetail = (val) => {
    history.push({ pathname: `/questions/${item.slug}`, state: { item} })
    dispatch(getAnswersByQuestionId(item._id))

  }



  
  const handleFav = () => {


    if (includeStatus) {

        undoLike(item._id).then(({success,data}) => {
        dispatch(getAllQuestions()) 
      })

    } else {
        questionLike(item._id).then(({success,data}) => {
        dispatch(getAllQuestions())
      })


    }
  }




  const handleDelete=()=>{

    deleteQuestion(item._id).then(()=> {
      dispatch(getAllQuestions())
    
    })


  }

  


  return (
    <Card className={classes.root}  >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {item.user.name[0].toUpperCase()}
          </Avatar>
        }


        subheader={<p style={{ fontSize: 18, fontWeight: "600", textAlign: "right", paddingRight: 15 }}>
          {new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(new Date(Date.parse(item.createdAt)))}</p>}
      />


      <CardContent onClick={handleQuestiondetail}
        className={classes.hover}>
        <Typography
          variant="h5"
          color="textSecondary"
          component="p"
          style={{ textAlign: "left", fontWeight: "bold", fontFamily: "Roboto", fontSize: 24, color: "#3caea3" }}

        >
          {item.title}

        </Typography>
      </CardContent>
      <CardContent onClick={handleQuestiondetail}
        className={classes.hoverContent}>

        {item.content.length > 180 ?
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            style={{ textAlign: "left", fontFamily: "'Roboto', sans-serif", fontSize: 20, fontWeight: "700" }}


          > {item.content.slice(0, 180)}... </Typography>
          :
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            style={{ textAlign: "left", fontFamily: "'Roboto', sans-serif", fontSize: 20, fontWeight: "700" }}>{item.content}  </Typography>


        }
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFav}>
          <FavoriteIcon style={{ color: includeStatus ? "red" : "gray" }} />
        </IconButton>

        <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
          {item.likeCount}
        </Typography>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>


        {
          item.user?._id === userData?.id ?
            <IconButton aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
            :
            null
        }
        {
          item.user?._id === userData?.id ?
            <IconButton >
              <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                Edit
              </Typography>
            </IconButton>
            :
            null
        }





      </CardActions>

    </Card>
  );
}


