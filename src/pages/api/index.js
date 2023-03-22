// // import Stripe from "stripe";

// // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51MnLljAHdwK4regnApSAIDSQvOxU6awamcvYYykcbqZEhVhqA8npbfz5ZMYz8CFqf5mQcQiXFKfrLKeMpAA2QZ5x00sfGiTR4m"
// );

// export default function App() {
//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: "{{CLIENT_SECRET}}",
//   };

//   return (
//     <Elements stripe={stripePromise} options={options}>
//       <CheckoutForm />
//     </Elements>
//   );
// }
