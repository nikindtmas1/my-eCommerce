import React from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField';

const AddressForm = () => {
    const methods = useForm();
    
    const onSubmit = () => {

    }

    return (
        <>
       
            <Typography variant='h6' gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={onSubmit}>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First name' />
                        <FormInput required name='lastName' label='Last name' />
                        <FormInput required name='address1' label='Address' />
                        <FormInput required name='email' label='Email' />
                        <FormInput required name='city' label='City' />
                        <FormInput required name='ZIP' label='ZIP / Postal code' />
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
