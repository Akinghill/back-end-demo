const router = require('express').Router();
const userRoutes = require('./users/index');

router.use('/users', userRoutes);

module.exports = router;