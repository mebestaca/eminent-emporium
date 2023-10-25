require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
    console.log("serverless function start");
    console.log("event", event);
    try{
        const { amount } = JSON.parse(event.body);

        const paymentIntent = await stripe.paymentIntent.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"],
            automatic_payment_methods: {enabled: true, allow_redirects: "never"},
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent })
        }
    }
    catch(error) {
        console.log({ error });

        return {
            statusCode: 400,
            body: JSON.stringify({ error })
        }
    }
}