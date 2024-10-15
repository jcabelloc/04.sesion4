const path = require('path');
const express = require('express');

const appDir = require('../utils/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(adminData.productos); 
    res.sendFile(path.join(appDir, 'views', 'tienda.html'));
});

module.exports = router;