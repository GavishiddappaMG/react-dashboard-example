const express = require('express');
const { isValidText, isValidEmail} = require('../util/validation');

const router = express.Router();

router.post('/login', async (req, res, next) => {
  const data = req.body;

  let errors = {};

  if (!isValidText(data.username)) {
    errors.title = 'Invalid username.';
  }

  if (!isValidText(data.password)) {
    errors.description = 'Invalid password.';
  }

  try {
    res.status(201).json({ message: 'Login Successful!', event: data });
  } catch (error) {
    next(error);
  }
});

router.post('/signup', async (req, res, next) => {
  const data = req.body;

  let errors = {};

  if (!isValidEmail(data.username)) {
    errors.title = 'Invalid email.';
  }

  if (!isValidText(data.username)) {
    errors.title = 'Invalid username.';
  }

  if (!isValidText(data.password)) {
    errors.description = 'Invalid password.';
  }

  try {
    res.status(201).json({ message: 'User created successfully!', event: data });
  } catch (error) {
    next(error);
  }
});

module.exports = router;