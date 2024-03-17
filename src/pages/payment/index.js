// PaymentForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Link from 'next/link';

const PaymentForm = ({ amount, expiryDate, onPaymentSuccess, onPaymentError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement, {
      billing_details: {
        name: 'Customer Name', // You can customize the customer's name
        expiration_date: '05/2026'
      },
    });

    if (error) {
      setError(error.message);
    //   onPaymentError && onPaymentError(error);
    } else {
      // Handle the successful payment here
      console.log(token, amount); 
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <CardElement />
    //   <button type="submit" disabled={!stripe}>
    //     Pay ${200} {/* Display amount in dollars */}
    //   </button>
    //   {error && <div>{error}</div>}
    // </form>
    <Link href="https://src.mastercard.com/profile/enroll?cmp=us.en-us.nam.mccom.EnrollInClicktoPay&locale=en_US">Click To pay</Link>
  );
};

export default PaymentForm;
// Explain
// import {CardElement, useStripe} from '@stripe/react-stripe-js';

// function CheckoutForm({amount, expiry}) {

//   const stripe = useStripe();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const params = {
//       payment_method: {
//         card: elements.getElement(CardElement),
//         billing_details: {
//           name: 'John Doe'
//         }
//       },
//       amount: amount * 100, // Convert to cents
//       currency: 'usd',
//       expiration_date: expiry // YYYY-MM-DD
//     };

//     const {error, paymentIntent} = await stripe.createPaymentMethod(params);

//     // Handle result
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button>Pay</button>
//     </form>
//   );
// }