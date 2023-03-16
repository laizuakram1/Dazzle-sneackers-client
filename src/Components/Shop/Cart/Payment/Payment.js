import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";


const Payment = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Payment</h2>
                    <p>Complete your purchase by provide your payment.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;