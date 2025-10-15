const express = require('express');
const userDataRoute = express.Router();

const {UpdateDetails,userDataTable} = require('../controller/userDataController');
userDataRoute.route('/userprofile/:id').get(userDataTable);
userDataRoute.route('/UpdateDetails/:userid').post(UpdateDetails)
module.exports = userDataRoute;