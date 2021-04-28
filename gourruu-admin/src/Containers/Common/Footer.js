import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  
  footer: {
    backgroundColor: "#F8F8F8",
    textAlign: "center",
    padding: "20px",
    paddingBottom: "30px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "20px",
    width: "100%",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
      <div className={classes.footer}>
        
            <Copyright />
       
      </div>
        
  );
}