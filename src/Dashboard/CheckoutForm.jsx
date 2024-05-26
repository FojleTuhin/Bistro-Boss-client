import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {

    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setError(error)
        }
        else {
            console.log(paymentMethod);
            setError('')
        }
    }


    return (
        // <form onSubmit={handleSubmit}>
        //     <CardElement
        //         options={{
        //             style: {
        //                 base: {
        //                     fontSize: '16px',
        //                     color: '#424770',
        //                     '::placeholder': {
        //                         color: '#aab7c4',
        //                     },
        //                 },
        //                 invalid: {
        //                     color: '#9e2146',
        //                 },
        //             },
        //         }}
        //     />
        //     <button type="submit"disabled={!stripe}  className="btn bg-emerald-300">
        //         Pay
        //     </button>

        //     <p>{error}</p>

        // </form>

        <form onSubmit={handleSubmit}>
            <CardElement options={{
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
            }}>

            </CardElement>
            <button type="submit" disabled={!stripe} className="btn bg-green-100">
                Pay
            </button>

            <p>{error}</p>
        </form>

    );
};

export default CheckoutForm;