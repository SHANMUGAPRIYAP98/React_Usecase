import React from 'react'
import { AppBar, Typography, Toolbar,  makeStyles, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import MoneyIcon from '@material-ui/icons/Money';
import {GoogleLogin} from 'react-google-login'
import Styles from '../CSS/Styling.css'
export default function NavBar() {
    const responseGoogle=(response)=>
    {
        console.log(response)
    }
    const useStyles = makeStyles({
        root:
        {
            flexGrow: 1
        },
        links: {
            color: 'white',
            textDecoration: 'none',
            fontSize: '16px',
            fontFamily: 'Tahoma'
        },
    });
    const classes = useStyles();
    return (

        <div>
            <AppBar position="static" style={{ backgroundColor: 'darkviolet' }}>
                <Toolbar>
                    <Typography variant="h5">
                        <IconButton color="inherit">
                            <MonetizationOnIcon style={{color:'yellow'}}/>
                        </IconButton>
                        E-Mortgage Portal</Typography>
                    <Typography variant="subtitle2">
                        <IconButton color="inherit" id="ic">
                            <HomeIcon style={{color:'yellow'}}/>
                        </IconButton>
                        <Link className={classes.links} to="/">Home</Link></Typography>
                    <Typography variant="subtitle2">
                        <IconButton color="inherit" >
                            <InfoIcon style={{color:'yellow'}}/>
                        </IconButton>
                        <Link className={classes.links} to="/about">About</Link></Typography>
                    <Typography variant="subtitle2">
                        <IconButton color="inherit" >
                            <AccountCircle style={{color:'yellow'}}/>
                        </IconButton>
                        <Link className={classes.links} to="/register">Register</Link></Typography>
                    <Typography variant="subtitle2">
                        <IconButton color="inherit">
                            <AccountBoxIcon style={{color:'yellow'}}/>
                        </IconButton>
                        <Link className={classes.links} to="/login">Login</Link></Typography>
                        <Typography variant="subtitle2">
                        <IconButton color="inherit">
                            <MoneyIcon style={{color:'yellow'}}/>
                        </IconButton>
                        <Link className={classes.links} to="/loan">Apply Loan</Link></Typography>
                        <IconButton color="inherit">                          
                        <GoogleLogin clientId="460706905247-hcg5rhli7b3udirp9uhpvpkef8phrctt.apps.googleusercontent.com" className="oauth" buttonText="Login"  onSuccess={responseGoogle} onFailure={responseGoogle}
                         cookiePolicy={'single_host_origin' } />
                        </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
