/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import Swal from "sweetalert2";

const CheckOut = ({ clientSecret, handlePaymentDetails, user }) => {
    const stripe = useStripe();
    const elements = useElements();
    console.log(user?.email)
    const [processing, setProcessing] = useState(false);
    const [cardError, setCardError] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
            Swal.fire({
                icon: 'error',
                title: 'Payment Failed',
                text: error.message
            })
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            Swal.fire({
                icon: 'success',
                title: 'Payment Success',
                text: 'Transaction id : ' + transactionId
            })
            setTransactionId(paymentIntent.id)
            handlePaymentDetails(paymentIntent.id)
        }
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <form className="bg-gray-900 rounded-lg shadow p-6" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-6 text-white">Payment Card Details</h2>
                    <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-gray-700 font-bold mb-2">
                            Card Number
                        </label>
                        <CardElement
                            id="cardNumber"
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                        disabled={!stripe || processing}
                    >
                        {processing ? 'Processing...' : 'Submit'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default CheckOut;