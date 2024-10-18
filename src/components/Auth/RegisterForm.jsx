import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: "ROLL_CUSTOMER"
}
const RegisterForm = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {

    }
    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Login
            </Typography>

            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
                    <Field
                        as={TextField}
                        name="fullName"
                        label="full name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="email"
                        label="email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="password"
                        label="password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <FormControl fullWidth margin="normal" >
                        <InputLabel id="role-simple-select-label">Role</InputLabel>
                        <Field
                            as={Select}
                            labelId="role-simple-select-label"
                            id="role-simple-select"
                            //value={}
                            label="Role"
                        >
                            <MenuItem value={"ROLL_CUSTOMER"}>customer</MenuItem>
                            <MenuItem value={"ROLL_RESTAURAANT_OWNER"}>restaurant owner</MenuItem>
                        </Field>
                    </FormControl>


                    <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type='submt' variant='contained'>
                        Register
                    </Button>
                </Form>
            </Formik>

            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                Already have an account?
                <Button size='small' onClick={() => navigate("/account/login")}>
                    LOGIN
                </Button>
            </Typography>

        </div>
    )
}

export default RegisterForm
