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
        width:'100vw'
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



export default function Item() {


    const [items, setItem] = useState([
        {
            code: "I001",
            description: "Something",
            quantity: 5,
            price: 500.00
        },
        {
            code: "I002",
            description: "Something 2",
            quantity: 20,
            price: 200.00
        },
        {
            code: "I003",
            description: "Something 3",
            quantity: 50,
            price: 20.00
        },
    ])

    const [addFormData, setAddFormData] = useState({
        code: "",
        description: "",
        quantity: "",
        price: "",
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        // console.log(newFormData);
        setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            code: addFormData.code,
            description: addFormData.description,
            quantity: addFormData.quantity,
            price: addFormData.price,
        };

        const newitems = [...items, newItem]
        setItem(newitems)
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
                            <StyledTableCell>Item Code</StyledTableCell>
                            <StyledTableCell align="left">Description</StyledTableCell>
                            <StyledTableCell align="left">Quantity</StyledTableCell>
                            <StyledTableCell align="left">Price</StyledTableCell>
                            <StyledTableCell id="tbl-header" align="left" style={{ width: 150, }}>Option</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.code}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.description}</StyledTableCell>
                                <StyledTableCell align="left">{row.quantity}</StyledTableCell>
                                <StyledTableCell align="left">{row.price}</StyledTableCell>
                                <StyledTableCell aria-label="edit" align='left'>
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
                        <h1>Add Item</h1>
                        <div >
                            <TextField
                                variant="outlined"
                                color='primary'
                                type='text'
                                name="code"
                                placeholder="Item Code"
                                style={{ padding: '10px' }}
                                onChange={handleAddFormChange}
                            />
                            <TextField
                                variant="outlined"
                                color='primary'
                                type='text'
                                name="decreption"
                                placeholder="Decreption"
                                style={{ padding: '10px' }}
                                onChange={handleAddFormChange}
                            />
                        </div>
                        <div >
                            <TextField
                                variant="outlined"
                                color='secondary'
                                type='number'
                                name="quantity"
                                placeholder="Quantity"
                                style={{ padding: '10px' }}
                                onChange={handleAddFormChange}
                            />
                            <TextField
                                variant="outlined"
                                color='secondary'
                                type='number'
                                name="price"
                                placeholder="Price"
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