import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux"
import {
    Container,

    Card,

    CardContent,
    Typography
} from "@material-ui/core";

import help from "../assets/help.jpg"

//import {useHistory} from "react-router-dom"
import { Breadcrum } from '../components/Breadcrum/Breadcrum';

const useStyles = makeStyles((theme) => ({
    root: {
        //maxWidth: 345,
    },
    wrapper: {
        display: "flex",
        marginTop: 0,
        width: "100vw",
        //border:"1px solid red",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            flexDirection: "column"

        },

        height: "90vh"





    },

    Cardleft: {
        //border:"1px solid red",

        [theme.breakpoints.down('md')]: {
            order: 1,
            marginBottom: 5

        },
    },


}));

export const Home = () => {
    const { loginStatus } = useSelector(state => state.authReducer)
    const classes = useStyles();

    //const history=useHistory()

    if (!loginStatus) {
        return (

            <Container className={classes.wrapper}   >
                <Card className={classes.Cardleft} >
                    <CardContent >
                        <Typography color="white" >
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                    </CardContent>
                </Card>


                {/* <img src="https://user-images.githubusercontent.com/65809527/104107370-dfadbf80-52bb-11eb-8526-b36ac11c55fe.jpg" style={{ width: "40vw" }}  alt="logo" /> */}
                <img src={help} style={{ width: "40vw" }} alt="logo" />

                <Card className={classes.Cardleft}>
                    <CardContent >
                        <Typography color="white" >
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                    </CardContent>
                </Card>
            </Container>

        )
    }else{
        return(
            <div style={{minHeight:"100vh",display:"flex",justifyContent:"center",paddingTop:10}}>
                
       {/*          <StyledButton onClick={()=>history.push("/newquestion")}>Ask</StyledButton>
                <StyledButton onClick={()=>history.push("/questions")} style={{marginLeft:5}}> Questions</StyledButton> */}
               
                <Breadcrum/>
            </div>
        )
    }
}
