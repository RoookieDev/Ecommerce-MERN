const express = require('express');
const routers = express.Router();

const contact = require('../controller/usercontroller');
routers.route('/contact').post(contact);



module.exports = routers;