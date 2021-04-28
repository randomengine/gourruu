import React from 'react';
import {
  Button,
  TextField,
  Grid,
  Container,
  FormControlLabel,
  Typography,
  Checkbox,
  CssBaseline,
  Avatar,
  makeStyles,
  Box
  } from "@material-ui/core";

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      title="404"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography
            align="center"
            color="textPrimary"
            variant="h1"
          >
            404 - Not Found!
          </Typography>
          
          <Box textAlign="center">
            <Link to="/" style={{ textDecoration: 'none' }}>
              Go Home
            </Link>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default NotFound;
