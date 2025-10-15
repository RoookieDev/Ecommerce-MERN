const express = require('express');
const cartRoute = express.Router();

const cartRouteModule = require('../controller/cartcontroller');
cartRoute.route('/addProduct').post(cartRouteModule)

module.exports = cartRoute