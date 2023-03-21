import React from 'react';
// import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)

const Payment = () => {

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-20">
                <div className="card-body">
                    <p>payment for sports snackers $300</p>
                    <div>
                        <Elements stripe={stripePromise}>
                            <CheckOutForm />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;