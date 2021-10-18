import React , {useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MainListItems from './listItems';
import HowItWorks from './../HomeFive/HowItWorks';
import Form from './Form';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "#fff",
    color: "#000", 
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)"
    
    
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    
  background: "#Febe15",
  background: "-webkit-gradient(linear, left top, right top, from(#Febe15), to(#F68e05))",
  background: "linear-gradient(to right, #Febe15, #F68e05)",
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    height: 'auto'
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
      
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [showMain, setshowMain] = useState(true);
  const [showMusic, setshowMusic] = useState(false)
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const showMusicUpload = (e) => {
    e.preventDefault()
    setshowMain(false)
    setshowMusic(true)
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            style={{fill: "#fff"}}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title} style={{display : "flex"}}>
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            <Typography component="p" className="emp-tag date" variant="p">
             {Date().toLocaleString().substring(0,24)}
            </Typography>
         
          </div>
         
          <div className="d-flex" >

          <Typography component="p" variant="p" className="emp-tag middle" style={{marginTop : 6}}>
             Hi , Admin
            </Typography>
       
             
           
            
           </div>
          
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        
             <React.Fragment>
               <br/>
             <div className="d-flex" >
            <div className={open ? "emp-box" : "emp-box-adjusted"}>
                <h1 className="emp-tag">AD</h1>
            </div>
            {open?  <div className="emp-details">   
            <Typography component="p" className="emp-tag" variant="p">
             Admin
            </Typography>
            <Typography component="p" variant="p" className="emp-tag small">
             Welcome Back
            </Typography>
            </div>: null}
        </div>
            </React.Fragment> 
            <hr style={{background: "#fff"}}/>
            <MainListItems showMusicUpload={showMusicUpload}/>
       
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        
              <Paper className={classes.paper}>
                 




              {showMain ? <HowItWorks/> : null }
              {showMusic ? <Form/> : null}
              </Paper>
           
        </Container>
      </main>
      
   </div>
  );
}