const express = require('express');
const router = express.Router();
const { getTrendingReposController } = require('../controllers/digest.controller');

router.get('/trending', getTrendingReposController);

module.exports = router;