import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from "yup"; // Correct yup import

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: "none", // Fixed typo: was "outlne"
    boxShadow: 24,
    p: 4,
};

const initialValues = {
    streetAddress: "",
    state: "",
    pincode: "",
    city: ""
}

// Corrected yup schema
const validationSchema = yup.object({
    streetAddress: yup.string().required("Street address is required"),
    state: yup.string().required("State is required"),
    pincode: yup.string().required("Pincode is required"), // Ensure pincode is treated as string
    city: yup.string().required("City is required"),
});

const items = [1, 1]; // Replace this with dynamic data later
const Cart = () => {
    const createOrderUsingSelectedAddress = () => {
        // Add logic for creating an order using the selected address
    }
    const handleOpenAddressModal = () => setOpen(true);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (values) => {
        console.log("Form Submitted", values);
        // Handle form submission here
    }

    return (
        <>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {items.map((item, index) => (
                        <CartItem key={index} />
                    ))}
                    <Divider />
                    <div className='billDetails px-5 text-sm'>
                        <p className='font-extralight py-5'>Bill Details</p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-400'>
                                <p>Item Total</p>
                                <p>₹599</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Delivery Fee</p>
                                <p>₹21</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>GST and Restaurant Charges</p>
                                <p>₹21</p>
                            </div>
                            <Divider />
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>Total Pay</p>
                            <p>₹2100</p>
                        </div>
                    </div>
                </section>

                <Divider orientation='vertical' flexItem />

                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2xl py-10'>
                            Choose Delivery Address
                        </h1>
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {[1, 1, 1, 1, 1].map((item, index) => (
                                <AddressCard key={index} handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true} />
                            ))}
                            <Card className="flex gap-5 w-64 p-5">
                                <AddLocationAltIcon />
                                <div className='space-y-3 text-gray-500'>
                                    <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
                                    <Button variant='outlined' fullWidth onClick={handleOpenAddressModal}>Add</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                  <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field 
                                        as={TextField}
                                        name="streetAddress"
                                        label="street Address"
                                        fullWidth
                                        variant="outlined"
                                        error={!ErrorMessage("streetAddress")}
                                       // halperText={
                                          //  <ErrorMessage>
                                       //         {(msg)=<span className='text-red-600'>{msg}</span>}
                                         //   </ErrorMessage>
                                       // }
                                        
                                        
                                        />

                                        

                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field 
                                        as={TextField}
                                        name="state"
                                        label="state"
                                        fullWidth
                                        variant="outlined"
                                        error={!ErrorMessage("streetAddress")}
                                       // halperText={
                                          //  <ErrorMessage>
                                       //         {(msg)=<span className='text-red-600'>{msg}</span>}
                                         //   </ErrorMessage>
                                       // }
                                        
                                        
                                        />

                                        

                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field 
                                        as={TextField}
                                        name="city"
                                        label="city"
                                        fullWidth
                                        variant="outlined"
                                        error={!ErrorMessage("streetAddress")}
                                       // halperText={
                                          //  <ErrorMessage>
                                       //         {(msg)=<span className='text-red-600'>{msg}</span>}
                                         //   </ErrorMessage>
                                       // }
                                        
                                        
                                        />

                                        

                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field 
                                        as={TextField}
                                        name="pincode"
                                        label="pincode"
                                        fullWidth
                                        variant="outlined"
                                        error={!ErrorMessage("streetAddress")}
                                       // halperText={
                                          //  <ErrorMessage>
                                       //         {(msg)=<span className='text-red-600'>{msg}</span>}
                                         //   </ErrorMessage>
                                       // }
                                        
                                        
                                        />

                                        

                                    </Grid>

                                  </Grid>
                                  <Grid item xs={12}>
                                    
                                    <Button  variant='contained' fullWidth type='submit' color='primary'  sx={{ mt: 2 }} >Delever Here</Button>
                                   

                                  </Grid>
                                
                            </form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </>
    )
}

export default Cart;
