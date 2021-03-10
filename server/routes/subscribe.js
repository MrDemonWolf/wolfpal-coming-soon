const express = require('express');

const mailer = require('../utils/mailer');

const router = express.Router();

/**
 * Load MongoDB models.
 */
const Subscription = require('../models/Subscription');

/**
 * Load input validators.
 */
const validateAddUserInput = require('../validation/subscribe/addUser');

/**
 * @route /subscribe
 * @method POST
 * @description Allows a user to subscribe for updates on WolfPal
 */
router.post('/', async (req, res) => {
  try {
    const { codes, errors, isValid } = validateAddUserInput(req.body);

    if (!isValid) {
      return res.status(400).json({ codes, errors });
    }

    const { email, name } = req.body;

    const isAlready = await Subscription.findOne({ email });

    if (isAlready) {
      return res.status(409).json({
        code: 'ALREADY_EXISTS',
        error: 'Email is already subscribed to the mailling list.'
      });
    }

    const newSubscription = await Subscription.create({
      email,
      name
    });

    await newSubscription.save();

    res.status(200).json({
      code: 'SUBSCRIBED',
      message: 'You have been subscribed to the mailing list.'
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      code: 'INTERNAL_SERVER_ERROR',
      error: 'Internal Server Error.'
    });
  }
});

/**
 * @route /subscribe
 * @method DELETE
 * @description Allows a user to unsubscribe for updates on WolfPal
 */
router.delete('/', async (req, res) => {});

module.exports = router;
