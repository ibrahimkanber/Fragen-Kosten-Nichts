import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import {useHistory} from "react-router-dom"


const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: "#fedbd0",
    
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
const StyledBreadcrumbQuestıons = withStyles((theme) => ({
  root: {
    
    
    //height: theme.spacing(3),
    backgroundColor:"white",
    color: "#3caea3",
    
    fontSize:24,
    fontWeight: theme.typography.fontWeightBold,
 

  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591


export  function BreadcrumQuestions({first,second,third}) {

    const history=useHistory()

  
    function handleHome(event) {
        history.push("/")
    }
  return (
    <Breadcrumbs aria-label="breadcrumb" separator="—">
      <StyledBreadcrumb
       
      
        label="Home"
        //icon={<HomeIcon fontSize="small" />}
        onClick={handleHome}
      />
      <StyledBreadcrumbQuestıons label="Questions"  />
  
      
    </Breadcrumbs>
  );
}