const path = require('path');
const express = require('express');

const appDir = require('../utils/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const productos = adminData.productos
    res.render('tienda', {prods: productos, titulo: "La Tienda PUG"});
});

module.exports = router;