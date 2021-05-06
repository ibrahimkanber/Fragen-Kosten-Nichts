
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import detective from "../../assets/help.jpg";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import {

    Grid,
  
} from "@material-ui/core";

/* function Copyright() {
    return (
        <Typography variant="body2" color="textPrimary" style={{ color: "white" }}>
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                React Share
      </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
} */

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(1),
        //border: "1px solid red",
        display: "flex",
         justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#11151d",
        //paddingLeft:theme.spacing(2),
       
     




    },
    footer: {
        padding: theme.spacing(2, 2, 1.5, 4.5),
        //marginTop: "auto",
        //backgroundColor:"#11151d",
        color: "white",
        //border: "4px solid green",
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            flexDirection:"column",
            padding: theme.spacing(2, 1, 0.5, 1),
            marginTop: 0,
      
        },
 
   
    },
 
    footerFirst: {
        padding: theme.spacing(2, 2, 0.5, 4.5),
        marginTop: "auto",
        //backgroundColor:"#11151d",
        color: "white",
        //border:"4px solid green",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down('sm')]: {
            flexDirection:"column",
            padding: theme.spacing(2, 1, 0.5, 1),
            marginTop: 0,
        },

    },

    social:{
        [theme.breakpoints.down('sm')]: {
            display:"flex",
            justifyContent:"space-around"
        },
    }



}));

export default function Footer() {
    const classes = useStyles();

    return (

        <Container className={classes.main} maxWidth={false} >
            <Grid container >
                <Grid item   lg={3} md={3} sm={6} xs={12} >
                    <footer className={classes.footerFirst} >

                        <div>
                            <img src={detective} style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: "green", marginRight: 10, marginBottom: 10, marginTop: 5 }} alt="logo" />
                        </div>
                        <div>
                            <Typography variant="subtitle2" style={{ opacity: 0.7 }}>FRAGEKASTEN</Typography>
                            <Typography variant="body1" style={{ marginTop: 15 }}>
                                <a href="https://clarusway.com/"> Questions</a>
                            </Typography>
                            <Typography variant="body1" >
                                <a href="https://clarusway.com/"> Jobs</a>
                            </Typography>
                            <Typography variant="body1" >
                                <a href="https://clarusway.com/"> Help</a>
                            </Typography>
                            <Typography variant="body1" >
                                <a href="https://clarusway.com/"> Mobile</a>
                            </Typography>
                        </div>

                    </footer>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12} >
                    <footer className={classes.footer}>
                        <Container maxWidth="lg">
                            <Typography variant="subtitle2" style={{ opacity: 0.7 }}>PRODUCTS</Typography>
                            <Typography variant="body1" style={{ marginTop: 15 }}>
                                <a href="https://clarusway.com/"> Teams</a>
                            </Typography>
                            <Typography variant="body1" >
                                <a href="https://clarusway.com/"> Talent</a>
                            </Typography>
                            <Typography variant="body1" >
                                <a href="https://clarusway.com/"> Advertising</a>
                            </Typography>
                            <Typography variant="body1" >
                                <a href="https://clarusway.com/"> Enterprise</a>
                            </Typography>

                        </Container>
                    </footer>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12} >
                    <footer className={classes.footer}>
                        <Container maxWidth="lg">
                            <Typography variant="subtitle2" style={{ opacity: 0.7 }}>COMPANY</Typography>
                            <Typography variant="body1" style={{ marginTop: 15 }}>
                                <a href="https://clarusway.com/"> About</a>
                            </Typography>
                            <Typography variant="body1" >
                                <a href="https://clarusway.com/"> Contact Us</a>
                            </Typography>
                            <Typography variant="body1" >
                                <a href="https://clarusway.com/"> Privacy Policy</a>
                            </Typography>
                            <Typography variant="body1" >
                                <a href="https://clarusway.com/"> Terms of Service</a>
                            </Typography>

                        </Container>
                    </footer>
                </Grid>
                <Grid item lg={3} md={3} sm={6}  xs={12}>
                    <footer className={classes.footer}>
                        <Container maxWidth="lg" >
                            <Typography variant="subtitle2" style={{ opacity: 0.7 }}>SOCIAL MEDIA</Typography>
                            <div className={classes.social} style={{ marginTop: 15 }}>
                            <Typography variant="body1" >
                                <TwitterIcon />
                            </Typography>
                            <Typography variant="body1" >
                                <InstagramIcon />
                            </Typography>
                            <Typography variant="body1" >
                                <FacebookIcon />
                            </Typography>
                            <Typography variant="body1" >
                                <GitHubIcon />
                            </Typography>
                            </div>

                        </Container>
                    </footer>
                </Grid>
            </Grid>
        </Container>
    );
}
