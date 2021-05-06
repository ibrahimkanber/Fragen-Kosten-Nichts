import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import {useHistory} from "react-router-dom"


const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: "#fedbd0",
    transition:2,
    //height: theme.spacing(3),
    color: "black",
    padding:5,
    fontSize:24,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: "#021636d0",
      color:"#fedbd0",
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

const StyledBreadcrumbQuestıonDetail = withStyles((theme) => ({
  root: {
    
    
    //height: theme.spacing(3),
    
    color: "#3caea3",
    backgroundColor:"white",
    fontSize:24,
    fontWeight: theme.typography.fontWeightBold,
 

  },
}))(Chip); 




export  function BreadcrumQuestionDetail({first,second,third}) {

    const history=useHistory()

    function handleClickQuestion(event) {
        history.push("/questions")
    }
    function handleClickHome(event) {
        history.push("/")
    }
  return (
    <Breadcrumbs aria-label="breadcrumb" separator="—">
      <StyledBreadcrumb
        
      
        label="Home"
        //icon={<HomeIcon fontSize="small" />}
        onClick={handleClickHome}
      />
      <StyledBreadcrumb   label="Questions" onClick={handleClickQuestion} />
      <StyledBreadcrumbQuestıonDetail  label="Question Detail"  />
      
    </Breadcrumbs>
  );
}