import React from 'react';
import {
  Button,
  TextField,
  Grid,
  Container,
  FormControlLabel,
  Typography,
  Checkbox,
  Link,
  CssBaseline,
  Avatar,
  Paper,
  Breadcrumbs
  } from "@material-ui/core";
  
import HomeIcon from '@material-ui/icons/Home';
  
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import useStyles from "../../Common/style";
import Orders from './Orders';
import Budget from './Budget';
// import LatestOrders from './LatestOrders';
// import LatestProducts from './LatestProducts';
// import Sales from './Sales';
// import TasksProgress from './TasksProgress';
// import TotalCustomers from './TotalCustomers';
// import TotalProfit from './TotalProfit';
// import TrafficByDevice from './TrafficByDevice';

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Breadcrumbs aria-label="breadcrumb" className={classes.breadcum}>
            <Typography color="textPrimary" className={classes.breadlink}>
              <HomeIcon className={classes.breadicon} />Dashboard
            </Typography>
          </Breadcrumbs>
          <Grid container spacing={3}>
            
            <Grid item lg={3} sm={6} xl={3} xs={12} key={1} >
              <Budget />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12} key={2} >
              <Budget />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12} key={3} >
              <Budget />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12} key={4} >
              <Budget />
            </Grid>
            
            <Grid item xs={12} md={12} lg={12} key={15}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid> 
        </Container>
        <Footer />
      </main>
    </div>
  );
}