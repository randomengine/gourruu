import React from 'react';
import clsx from 'clsx';
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListAltSharpIcon from '@material-ui/icons/ListAltSharp';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {logout} from "../../Utils/Utils";
import useStyles from "./style";
import ImagePath from '../../Config/ImageConstants';
import { useHistory, Link,NavLink as RouterLink  } from "react-router-dom";


export default function Sidebar(props) {
  const classes = useStyles();
  const history = useHistory();
  const adminLogout = () => {
    logout();
    history.push("/signin");
  }

  return (
    
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.drawerOpen,
          [classes.drawerClose]: !props.drawerOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.drawerOpen,
            [classes.drawerClose]: !props.drawerOpen,
          }),
        }}
      >
      <div className={classes.toolbar}>
        {/* <img src={ImagePath.LogoImage}  alt="image"/> */}
        <Typography className={classes.title} variant="h6" noWrap>
          Admin Panel
        </Typography>
        
      </div>
      <Divider />
      
      <List>
        {/* <ListItem button key={1}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItemText primary={'Dashboard'} />
          </Link>
          
        </ListItem>

        <ListItem button key={2}>
          <ListItemIcon><AccountBoxIcon /></ListItemIcon>
          <Link to="/userlist" style={{ textDecoration: 'none' }}>
            <ListItemText primary={'Users'} />
          </Link>
        </ListItem> */}

        <ListItem 
          className={classes.item_nav}
          disableGutters
          key={1}
        >
          <Button
            activeClassName={classes.active_nav}
            className={classes.button_nav}
            component={RouterLink}
            to="/"
          >
            <HomeIcon />
            <span className={classes.title_nav}>Dashboard</span>
          </Button>
        </ListItem>

        <ListItem 
          className={classes.item_nav}
          disableGutters
          key={2}
        >
          <Button
            activeClassName={classes.active_nav}
            className={classes.button_nav}
            component={RouterLink}
            to="/userlist"
          >
            <AccountBoxIcon />
            <span className={classes.title_nav}>Users</span>
          </Button>
        </ListItem>

        <ListItem 
          className={classes.item_nav}
          disableGutters
          key={3}
        >
          <Button
            activeClassName={classes.active_nav}
            className={classes.button_nav}
            component={RouterLink}
            to="/111"
          >
            <ListAltSharpIcon />
            <span className={classes.title_nav}>Static Pages</span>
          </Button>
        </ListItem>

        <ListItem 
          className={classes.item_nav}
          disableGutters
          key={4}
        >
          <Button
            activeClassName={classes.active_nav}
            className={classes.button_nav}
            component={RouterLink}
            to="/settings"
          >
            <SettingsSharpIcon />
            <span className={classes.title_nav}>Settings</span>
          </Button>
        </ListItem>

        <ListItem 
          className={classes.item_nav}
          disableGutters
          key={5}
        >
          <Button
            activeClassName={classes.active_nav}
            className={classes.button_nav}
            onClick={adminLogout}
          >
            <ExitToAppIcon />
            <span className={classes.title_nav}>Signout</span>
          </Button>
        </ListItem>

        
        
      </List>
      
    </Drawer>
  
  );
}
