import React from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';



const BillingAddress = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        
    }
    return (
        <div className='mt-20'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ml-5">
                        <h1 className="text-4xl font-bold">WELCOME TO <span className='text-red-500'>DAZZLE</span></h1>
                        <p className="py-6 w-96">Provide your legal Billing address. Input your personal information very scencerly because our contact and any future inquery depend in this information.</p>
                    </div>
                    <div className="form-container">
                        <h3 className='text-2xl font-bold'>Billing Address</h3>
                        <div className='border-2 w-24 border-success mt-2 mb-5'></div>
                        <form onSubmit={handleSubmit(onSubmit)} className='grid md:grid-cols-2 gap-5 border-2 p-5 rounded bg-slate-200'>
                            <TextField
                                {...register("firstName")}
                                id="outlined-multiline-flexible"
                                label="First Name"
                                multiline
                                maxRows={4}
                                className='mr-10'
                            />
                            <TextField
                                {...register("lastName")}
                                id="outlined-textarea"
                                label="Last Name"
                                multiline
                            />
                            <TextField
                                {...register("address")}
                                id="standard-basic"
                                label="Address"
                                variant="standard"
                            />
                            <TextField
                                {...register("city")}
                                id="standard-basic"
                                label="City"
                                variant="standard"
                            />
                            <TextField
                                {...register("country")}
                                id="standard-basic"
                                label="Country"
                                variant="standard"
                            />
                            <TextField
                                {...register("state")}
                                id="standard-basic"
                                label="State"
                                variant="standard"
                            />
                            <TextField
                                {...register("zip")}
                                id="standard-basic"
                                label="Zip Code"
                                variant="standard"
                            />
                            <TextField
                                {...register("phone")}
                                id="outlined-number"
                                label="Phone"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                                <input className='btn btn-success hover:bg-red-500 ease-out duration-500 hover:border-0 text-white' type="submit" value='Checkout' />
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillingAddress;