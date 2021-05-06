import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';

import {  useSelector,useDispatch } from "react-redux"
import { answarUndoLike, answerLike } from '../../utils/answerLike';


import { getAnswersByQuestionId } from '../../redux/actions/answerActions'


const useStyles = makeStyles((theme) => ({
  root: {

   //backgroundColor: "rgba(254,200,208,0.5)"
   boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"

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
      height: 125,

    },

  },
  text: {
    fontWeight: "600",
    fontSize: 16

  }



}));

export function AnswerItem({ item }) {
  const userData=useSelector(state=>state.authReducer.userData)
  const dispatch = useDispatch()

  const classes = useStyles();
  
 
  
 
  const includeStatus=item.likes.includes(userData?.id)


  const handleFav=()=>{
    if(includeStatus){

        answarUndoLike(item.question,item._id).then(data=>{
        dispatch(getAnswersByQuestionId(item.question))


      })

   
    }else {

        answerLike(item.question,item._id).then(data=>{
        dispatch(getAnswersByQuestionId(item.question))
      })


    }
  }




  return (
    <Card className={classes.root} >
      
      <CardContent 
        className={classes.hoverContent}>

       
          <Typography
            variant="body1"
            color="textPrimary"
            component="p"
            style={{ textAlign: "left", fontFamily: "'Roboto', sans-serif", fontSize: 20, fontWeight: "700" }}


          > {item.content} </Typography> 
          

        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFav} >
          <FavoriteIcon style={{color:item.likes.includes(userData?.id)? "red":'gray'}} />
        </IconButton>

        <Typography variant="body2" color="textPrimary" component="p" className={classes.text}>
          {item.likes.length}
        </Typography>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        {
          item.user?._id === userData?.id ?
            <IconButton aria-label="delete" >
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


