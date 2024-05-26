import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Title from '../Shared/Title';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>

            <Title heading='Please pay to eat' subheading='PAYMENT'></Title>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;