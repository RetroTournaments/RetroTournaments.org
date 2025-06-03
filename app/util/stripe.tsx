import Stripe from "stripe";

const stripe = process.env.STRIPE_API_KEY 
  ? new Stripe(process.env.STRIPE_API_KEY)
  : null;

export default stripe;
