import React,{useState,useEffect} from 'react';
import {
    Button,
    TextField,
    Grid,
    Container,
    CssBaseline,
    Paper,
    Avatar,
    Box,
    Card,
    CardHeader,
    CardActions,
    CardContent,
    Divider,
    Typography,
    Breadcrumbs,
    Link,
    } from "@material-ui/core";
import clsx from 'clsx';
import HomeIcon from '@material-ui/icons/Home';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import useStyles from "../../Common/style";
import { connect } from 'react-redux';
import { setAdminDetails } from '../../../Store/Actions/Action';

const states = [
    {
      value: 'alabama',
      label: 'Alabama'
    },
    {
      value: 'new-york',
      label: 'New York'
    },
    {
      value: 'west-bengal',
      label: 'West Bengal'
    }
  ];

const Profile = (props) => {
    console.log('props',props);
    const classes = useStyles();
    const adminData = props.data.adminDetails;
    const [values, setValues] = useState({
        firstName: adminData.firstName,
        lastName: adminData.lastName,
        email: adminData.email,
        phone: adminData.phone,
        state: adminData.state,
        country: adminData.country
    });
    
    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
    };

    const updateAdminData = () => {
        props.setAdminDetailsHandler({firstName: values.firstName,
                                  lastName: values.lastName,
                                  email: values.email,
                                  phone: values.phone,
                                  state: values.state,
                                  country: values.country});
    }


    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcum}>
                        <Link color="inherit" href="/" className={classes.breadlink}>
                        <HomeIcon className={classes.breadicon} />Dashboard
                        </Link>
                        <Typography color="textPrimary" className={classes.breadlink}>Profile</Typography>
                    </Breadcrumbs>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={4} >
                            <Card>
                                <CardContent>
                                    <Box 
                                        alignItems="center"
                                        display="flex"
                                        flexDirection="column"
                                    >
                                        <Avatar
                                            className={classes.avatar}
                                            // src={user.avatar}
                                        />
                                        <Typography
                                            color="textPrimary"
                                            gutterBottom
                                            variant="h5"
                                        >
                                            Suman Guria
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            variant="body1"
                                        >
                                            Kolkata, India
                                        </Typography>
                                        <Typography
                                            className={classes.dateText}
                                            color="textSecondary"
                                            variant="body1"
                                        >
                                            17-03-2021
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <Divider />
                                <CardActions>
                                    <Button
                                        color="primary"
                                        fullWidth
                                        variant="text"
                                    >
                                        Upload picture
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={6} lg={8}>
                            <form  
                                noValidate 
                                autoComplete="off"
                            >
                                <Card>
                                    <CardHeader
                                        subheader="The information can be edited"
                                        title="Profile"
                                    />
                                    <Divider />
                                    <CardContent>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} md={6} >
                                                <TextField
                                                    fullWidth
                                                    helperText="Please specify the first name"
                                                    label="First name"
                                                    name="firstName"
                                                    onChange={handleChange}
                                                    required
                                                    value={values.firstName}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6} >
                                                <TextField
                                                    fullWidth
                                                    label="Last name"
                                                    name="lastName"
                                                    onChange={handleChange}
                                                    required
                                                    value={values.lastName}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6} >
                                                <TextField
                                                    fullWidth
                                                    label="Email Address"
                                                    name="email"
                                                    onChange={handleChange}
                                                    required
                                                    value={values.email}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6} >
                                                <TextField
                                                    fullWidth
                                                    label="Select State"
                                                    name="state"
                                                    onChange={handleChange}
                                                    required
                                                    select
                                                    SelectProps={{ native: true }}
                                                    value={values.state}
                                                    variant="outlined"
                                                >
                                                    {states.map((option) => (
                                                    <option
                                                        key={option.value}
                                                        value={option.value}
                                                    >
                                                        {option.label}
                                                    </option>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12} md={6} >
                                                <TextField
                                                    fullWidth
                                                    label="Phone"
                                                    name="phone"
                                                    onChange={handleChange}
                                                    required
                                                    value={values.phone}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6} >
                                                <TextField
                                                    fullWidth
                                                    id="outlined-password-input"
                                                    label="Password"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    variant="outlined"
                                                    
                                                />
                                            </Grid> 
                                        </Grid>
                                    </CardContent>
                                    <Divider />
                                    <Box
                                        display="flex"
                                        justifyContent="flex-end"
                                        p={2}
                                    >
                                        <Button
                                            onClick = {updateAdminData}
                                            color="primary"
                                            variant="contained"
                                        >
                                            Save details
                                        </Button>
                                        
                                    </Box>
                                    
                                </Card>
                            </form>
                        </Grid>

                    </Grid>

                </Container>
                
                
            </main>
            <Footer />
        </div>
    );
}

const mapStateToProps=state=>({
    data:state.adminDetails,
})
const mapDispatchToProps=dispatch=>({
    setAdminDetailsHandler: data => dispatch(setAdminDetails(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile)