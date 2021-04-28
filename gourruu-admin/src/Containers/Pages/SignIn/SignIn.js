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
  Avatar
  } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {login} from '../../../Utils/Utils';
import useStyles from "./style";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { setAdminDetails } from '../../../Store/Actions/Action';

  
const SignIn = (props) => {

  const classes = useStyles();
  const history = useHistory();
  const onLogin = values => {
    props.setAdminDetailsHandler({firstName: "Suman",
                                  lastName: 'Guria',
                                  email: 'suman@gmail.com',
                                  phone: '9876543215',
                                  state: 'west_bengal',
                                  country: 'India'});
    login();
    history.push('/');
  };
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form  className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            // autoComplete="off"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            // autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onLogin}
            className={classes.submit}
            
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>  
  );
}

const mapStateToProps=state=>({
  // data:state.adminDetails
})
const mapDispatchToProps=dispatch=>({
  setAdminDetailsHandler: data => dispatch(setAdminDetails(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(SignIn)