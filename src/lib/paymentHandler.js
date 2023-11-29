require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const sendPaymentKey = async (req, res) => {
  try {
    const { price } = req.body;
    const amount = parseFloat(price) * 100;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { sendPaymentKey };
