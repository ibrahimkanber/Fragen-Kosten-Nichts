import { fade, makeStyles } from '@material-ui/core/styles';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";



export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
     

    },

    menuButton: {
        marginLeft: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
    },
    rightBtn: {
        display: "none",
        padding: 5,
        borderRadius:12,
        backgroundColor:"#021636",
        border:"2px solid #02ab48",
        marginLeft: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            display: "block",
      
        },
        '&:hover': {
            backgroundColor: "#02ab48",
           
        },
    },
    title: {
        flexGrow: 4.5,
        //border: "1px solid red",
        display: 'none',
        textAlign: "left",
        marginLeft: 5,
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
      
    },
    search: {
        flex: 2.5,
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: theme.spacing(1),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        [theme.breakpoints.down('xs')]: {
           width:100
        },
   

    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),

        [theme.breakpoints.up('lg')]: {
            width: '30ch',
            '&:focus': {
                width: '35ch',
            },
        },
        [theme.breakpoints.down('md')]: {
            width: '20ch',
            '&:focus': {
                width: '25ch',
            },

        },
    },
    span:{
        fontFamily:" 'Parisienne', cursive ",
        marginLeft:theme.spacing(12),
        position:"absolute",
        bottom:0,
        fontSize:"2rem",
        [theme.breakpoints.down('md')]: {
            marginLeft:theme.spacing(4),
            fontSize:25

        },


    },
    jumbotron:{
        color:"red",
        backgroundColor:"white",
        flex:1,
        flexWrap:"wrap",
        height:100,
       
        

        
        
    },
    home:{
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: "block",
      
        },
    },
    root2: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          margin: theme.spacing(1),
        },
      }


}));





export const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
export const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);



