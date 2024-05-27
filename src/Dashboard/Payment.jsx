import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Title from '../Shared/Title';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51PKjKBHUCdsFLxSQhs1QRBxU3zSLJ2wxDBqStVL0rMqGpwy73proQwdY6Iu1hNMBk0xO2ZqSkojR3nrlGOYceN6a00pvPtHb2e');
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