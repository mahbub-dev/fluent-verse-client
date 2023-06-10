import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import CheckOut from "./CheckOut";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useAuth } from "../../../Hooks/useAuth";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_APP_PAYMENT_PK);
const Payment = () => {
    const { logOut, user } = useAuth()
    const axiosSecure = useAxiosSecure(logOut)
    const cart = useLocation().state.data
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const [clientSecret, setClientSecret] = useState('');
    const price = parseFloat(total.toFixed(2))
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handlePaymentDetails = (tnxId) => {
        const payment = {
            email: user?.email,
            transactionId: tnxId,
            price,
            date: new Date(),
            classItemsId: cart.map(item => item._id),
            status: 'service pending',
            itemNames: cart.map(item => item.title)
        }
        axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data);
                if (res.data.result.insertedId) {
                    console.log(res.data.result.insertedId)
                }
            })

    }
    return (

        <Elements stripe={stripePromise}>
            <CheckOut user={user} handlePaymentDetails={handlePaymentDetails} clientSecret={clientSecret} />
        </Elements>

    );
};

export default Payment;