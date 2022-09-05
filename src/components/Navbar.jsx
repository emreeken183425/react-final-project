import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import cwLogo from '../assets/cw.jpeg'
import { Login } from '@mui/icons-material';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:"white",
    fontSize:"25px"
  },
  appBar:{
    backgroundColor: "#2196f3"
  },
  logo:{
    width:40
  }
}));

export default function Navbar() {
  const classes = useStyles();
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

 
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
   
  };

  return (
    <div className={classes.root}>
      
      <AppBar position="static" className={classes.appBar} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <img className={classes.logo} src={cwLogo} alt="logo" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           <span>{" 🙂 < EMRE EKEN >  " }</span> BLOG  🙂
          </Typography>
          { 
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{fontSize:"40px"}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem onClick={handleClose}>Register</MenuItem>               
              </Menu>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
