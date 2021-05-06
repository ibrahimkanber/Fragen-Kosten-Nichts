import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

///
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from "@material-ui/icons/Info";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { Button } from '@material-ui/core';

//
import { useStyles, StyledMenu, StyledMenuItem } from "./NavbarStyles"
import detective from "../../assets/help.jpg";
///

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
////
import { logout } from "../../redux/actions/authActions"




export default function Navbar() {
    const { loginStatus } = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const history = useHistory()


    const [homeBtnFlag, setHomeBtnFlag] = useState(false)
    const [loginBtnFlag, setLoginBtnFlag] = useState(true)
    const [signUpBtnFlag, setSignUpBtnFlag] = useState(true)


    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        console.log("logout")
        dispatch(logout())
        history.push("/")
    }








    return (
        <>
            <div className={classes.root}>
                <AppBar position="fixed" style={{ backgroundColor: "	#021636" }}>
                    <Toolbar>
                        <Link to="/" style={{ opacity: 1 }}>
                            <img src={detective} style={{ width: 60, height: 60, borderRadius: 10, backgroundColor: "green", marginTop: 10, marginBottom: 10 }} alt="logo" />
                        </Link>
                        <Typography className={classes.title} variant="h6" noWrap>
                            FrageKasten <span className={classes.span}> fragen kosten nichts </span>
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >

                            {!loginStatus ?
                                <div>
                                    <StyledMenuItem>
                                        <ListItemIcon>
                                            <ContactSupportIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Contact Info" />
                                    </StyledMenuItem>
                                    <StyledMenuItem>
                                        <ListItemIcon>
                                            <InfoIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Login" />
                                    </StyledMenuItem>
                                    <StyledMenuItem>
                                        <ListItemIcon>
                                            <SendIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Sign Up" />
                                    </StyledMenuItem>
                                </div>
                                :
                                <div>
                                    <StyledMenuItem>
                                        <ListItemIcon>
                                            <ContactSupportIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Contact Info" />
                                    </StyledMenuItem>
                                    <StyledMenuItem>
                                        <ListItemIcon>
                                            <InfoIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Log Out" />
                                    </StyledMenuItem>
                                    
                                </div>


                            }

                        </StyledMenu>
                        {!loginStatus ?
                            <>
                                <div className={classes.home}>
                                    <Button className={classes.rightBtn}
                                        onClick={() => {
                                            setHomeBtnFlag(false)
                                            setLoginBtnFlag(true)
                                            setSignUpBtnFlag(true)
                                            history.push("/")
                                        }}
                                        style={{ display: homeBtnFlag ? "block" : "none" }}>
                                        <Typography style={{ fontSize: 12 }} color="error">
                                            Home
                                </Typography>
                                    </Button>
                                </div>
                                <div className={classes.home}>
                                    <Button className={classes.rightBtn} style={{ display: loginBtnFlag ? "block" : "none" }} onClick={() => {
                                        history.push("/login")
                                        setHomeBtnFlag(true)
                                        setLoginBtnFlag(false)
                                        setSignUpBtnFlag(true)

                                    }} >
                                        <Typography style={{ fontSize: 12 }}  color="error">
                                            login
                                </Typography>
                                    </Button>
                                </div>
                                <div className={classes.home}>
                                    <Button className={classes.rightBtn} style={{ display: signUpBtnFlag ? "block" : "none" }} onClick={() => {
                                        history.push("/signup")
                                        setHomeBtnFlag(true)
                                        setLoginBtnFlag(true)
                                        setSignUpBtnFlag(false)


                                    }}>
                                        <Typography style={{ fontSize: 12}}  color="error">
                                            Sign Up
                                </Typography>
                                    </Button>
                                </div>
                                <Button className={classes.rightBtn}>
                                    <Typography style={{ fontSize: 12}}  color="error">
                                        About Us
                                </Typography>
                                </Button>

                            </>

                            :
                            <>
                         {/*        <Button variant="contained" className={classes.rightBtn} onClick={handleStack}>
                                    <Typography style={{ fontSize: 12, color: "white" }}>
                                        MyStack
                                </Typography>
                                </Button> */}

                                <Button variant="contained" className={classes.rightBtn}>
                                    <Typography style={{ fontSize: 12 }}  color="error">
                                        Profile
                                </Typography>
                                </Button>

                                <Button variant="contained" className={classes.rightBtn} onClick={handleLogout} >
                                    <Typography style={{ fontSize: 12}}  color="error" >
                                        Log Out
                                </Typography>

                                </Button>



                            </>
                        }


                    </Toolbar>
                </AppBar>
            </div>

            <div className={classes.jumbotron}>


            </div>

        </>
    );
}