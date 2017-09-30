var keys = require('../config/key');
var stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
  app.post('/api/stripe', async (req, res) => {
    const  charge = await stripe.charges.create({
      amount: 5000,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  })

}
