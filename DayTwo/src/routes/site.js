const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/SiteController');

router.use('/search', newsControllers.search);
router.use('/', newsControllers.home);

module.exports = router;
