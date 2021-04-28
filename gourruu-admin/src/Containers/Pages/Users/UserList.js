import React,{useState,useEffect} from 'react';
import {
    Container,
    CssBaseline,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    Paper,
    Checkbox,
    Box,
    Avatar,
    Breadcrumbs,
    Link,
    } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import useStyles from "../../Common/style";
import { connect } from 'react-redux';


const customers = [
    {
      id: 1,
      address: {
        country: 'USA',
        state: 'West Virginia',
        city: 'Parkersburg',
        street: '2849 Fulton Street'
      },
      avatarUrl: 'https://i.pravatar.cc/300?img=1',
      createdAt: 1555016400000,
      email: 'ekaterina.tankova@devias.io',
      name: 'Suman Tankova',
      phone: '304-428-3097'
    },
    {
      id: 2,
      address: {
        country: 'USA',
        state: 'Bristow',
        city: 'Iowa',
        street: '1865  Pleasant Hill Road'
      },
      avatarUrl: 'https://i.pravatar.cc/300?img=2',
      createdAt: 1555016400000,
      email: 'cao.yu@devias.io',
      name: 'Cao Yu',
      phone: '712-351-5711'
    },
    {
      id: 3,
      address: {
        country: 'USA',
        state: 'Georgia',
        city: 'Atlanta',
        street: '4894  Lakeland Park Drive'
      },
      avatarUrl: 'https://i.pravatar.cc/300?img=3',
      createdAt: 1555016400000,
      email: 'alexa.richardson@devias.io',
      name: 'Alexa Richardson',
      phone: '770-635-2682'
    },
    {
      id: 4,
      address: {
        country: 'USA',
        state: 'Ohio',
        city: 'Dover',
        street: '4158  Hedge Street'
      },
      avatarUrl: 'https://i.pravatar.cc/300?img=4',
      createdAt: 1554930000000,
      email: 'anje.keizer@devias.io',
      name: 'Anje Keizer',
      phone: '908-691-3242'
    },
    {
      id: 5,
      address: {
        country: 'USA',
        state: 'Texas',
        city: 'Dallas',
        street: '75247'
      },
      avatarUrl: 'https://i.pravatar.cc/300?img=5',
      createdAt: 1554757200000,
      email: 'clarke.gillebert@devias.io',
      name: 'Clarke Gillebert',
      phone: '972-333-4106'
    },
    {
      id: 6,
      address: {
        country: 'USA',
        state: 'California',
        city: 'Bakerfield',
        street: '317 Angus Road'
      },
      avatarUrl: 'https://i.pravatar.cc/300?img=6',
      createdAt: 1554670800000,
      email: 'adam.denisov@devias.io',
      name: 'Adam Denisov',
      phone: '858-602-3409'
    },
    {
      id: 7,
      address: {
        country: 'USA',
        state: 'California',
        city: 'Redondo Beach',
        street: '2188  Armbrester Drive'
      },
      avatarUrl: 'https://i.pravatar.cc/300?img=7',
      createdAt: 1554325200000,
      email: 'ava.gregoraci@devias.io',
      name: 'Ava Gregoraci',
      phone: '415-907-2647'
    },
    {
      id: 8,
      address: {
        country: 'USA',
        state: 'Nevada',
        city: 'Las Vegas',
        street: '1798  Hickory Ridge Drive'
      },
      avatarUrl: 'https://i.pravatar.cc/300?img=8',
      createdAt: 1523048400000,
      email: 'emilee.simchenko@devias.io',
      name: 'Emilee Simchenko',
      phone: '702-661-1654'
    },
    {
      id: 9,
      address: {
        country: 'USA',
        state: 'Michigan',
        city: 'Detroit',
        street: '3934  Wildrose Lane'
      },
      avatarUrl: 'https://i.pravatar.cc/300?img=9',
      createdAt: 1554702800000,
      email: 'kwak.seong.min@devias.io',
      name: 'Kwak Seong-Min',
      phone: '313-812-8947'
    },
    {
      id: 10,
      address: {
        country: 'USA',
        state: 'Utah',
        city: 'Salt Lake City',
        street: '368 Lamberts Branch Road'
      },
      avatarUrl: 'https://i.pravatar.cc/300?img=10',
      createdAt: 1522702800000,
      email: 'merrile.burgett@devias.io',
      name: 'Merrile Burgett',
      phone: '801-301-7894'
    }
];



const UserList = (props) => {
    const classes = useStyles();
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleSelectAll = (event) => {
        let newSelectedCustomerIds;

        if (event.target.checked) {
            newSelectedCustomerIds = customers.map((customer) => customer.id);
        } else {
            newSelectedCustomerIds = [];
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedCustomerIds.indexOf(id);
        let newSelectedCustomerIds = [];

        if (selectedIndex === -1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
        } else if (selectedIndex === 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
        } else if (selectedIndex === selectedCustomerIds.length - 1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(
                selectedCustomerIds.slice(0, selectedIndex),
                selectedCustomerIds.slice(selectedIndex + 1)
            );
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

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
                    {/* <Link
                      color="inherit"
                      href="/getting-started/installation/"
                      className={classes.breadlink}
                    >Core
                    </Link> */}
                    <Typography color="textPrimary" className={classes.breadlink}>Users</Typography>
                  </Breadcrumbs>
                    <Paper className={classes.paper}>
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>User List</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={selectedCustomerIds.length === customers.length}
                                                color="primary"
                                                indeterminate={
                                                selectedCustomerIds.length > 0
                                                && selectedCustomerIds.length < customers.length
                                                }
                                                onChange={handleSelectAll}
                                            />
                                        </TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Location</TableCell>
                                        <TableCell>Phone</TableCell>
                                        <TableCell>Registration date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((customer) => (
                                    <TableRow
                                        hover
                                        key={customer.id}
                                        selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                            checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                                            onChange={(event) => handleSelectOne(event, customer.id)}
                                            value="true"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                alignItems="center"
                                                display="flex"
                                            >
                                                <Avatar
                                                    className={classes.avatarlist}
                                                    src={customer.avatarUrl}
                                                >
                                                    {customer.name}
                                                </Avatar>
                                                <Typography
                                                    color="textPrimary"
                                                    variant="body1"
                                                >
                                                    {customer.name}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>{customer.email}</TableCell>
                                        <TableCell>{`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}</TableCell>
                                        <TableCell>{customer.phone}</TableCell>
                                        <TableCell>{customer.createdAt}</TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={customers.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Container>
                
            </main>
            <Footer />
        </div>
    );
}

const mapStateToProps=state=>({

})
const mapDispatchToProps=dispatch=>({

})

export default connect(mapStateToProps,mapDispatchToProps)(UserList)