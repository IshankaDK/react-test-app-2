import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// import IconButton from '@material-ui/core/IconButton';




const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    table: {
        minWidth: 700,
    },
}));


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);



export default function Customer() {


    const [customers, setCustomer] = useState([
        {
            id: "C002",
            name: "Nimal",
            address: "Galle",
            contact: 771245687
        },
        {
            id: "C003",
            name: "Gune",
            address: "Galle",
            contact: 70000000687
        }
    ])

    const [addFormData, setAddFormData] = useState({
        id: "",
        name: "",
        address: "",
        contact: "",
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        console.log(newFormData);
        setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newCustomer = {
            id: addFormData.id,
            name: addFormData.name,
            address: addFormData.address,
            contact: addFormData.contact,
        };

        const newCustomers = [...customers, newCustomer]
        setCustomer(newCustomers)
        handleClose()

    }
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h1 style={{ padding: '1px' }}>Customer Form</h1>

                <Button onClick={handleOpen} startIcon={<AddIcon />} variant="contained" color="primary" style={{ marginLeft: 'auto', marginRight: '50px' }}>
                    Add
                </Button>
            </div>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customer table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>CustomerID</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                            <StyledTableCell align="right">Address</StyledTableCell>
                            <StyledTableCell align="right">Contact</StyledTableCell>
                            <StyledTableCell id="tbl-header" align="right" style={{ width: 150, }}>Option</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.name}</StyledTableCell>
                                <StyledTableCell align="right">{row.address}</StyledTableCell>
                                <StyledTableCell align="right">{row.contact}</StyledTableCell>
                                <StyledTableCell aria-label="edit" align='right'>
                                    < EditIcon style={{ color: 'green', cursor: 'pointer' , marginRight:'15px'}} />
                                    <DeleteIcon style={{ color: 'red', cursor: 'pointer' ,marginRight:'15px' }} align='right' />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h1>Add Customer</h1>
                        <div >
                            <TextField
                                variant="outlined"
                                color='primary'
                                type='text'
                                name="id"
                                placeholder="Customer ID"
                                style={{ padding: '10px' }}
                                onChange={handleAddFormChange}
                            />
                            <TextField
                                variant="outlined"
                                color='primary'
                                type='text'
                                name="name"
                                placeholder="Name"
                                style={{ padding: '10px' }}
                                onChange={handleAddFormChange}
                            />
                        </div>
                        <div >
                            <TextField
                                variant="outlined"
                                color='secondary'
                                type='text'
                                name="address"
                                placeholder="Address"
                                style={{ padding: '10px' }}
                                onChange={handleAddFormChange}
                            />
                            <TextField
                                variant="outlined"
                                color='secondary'
                                type='number'
                                name="contact"
                                placeholder="Contact"
                                style={{ padding: '10px' }}
                                onChange={handleAddFormChange}
                            />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <Button variant="contained" color="primary" onClick={handleAddFormSubmit}>
                                Add
                            </Button>
                            <Button onClick={handleClose} variant="text" color="secondary">
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}