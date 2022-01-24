const express           = require('express');
const router            = new express.Router();
const test = require("../controllers/test.js");
const testMongo = require("../controllers/testMongo.js");
const whale = require("../controllers/whale/whale.js");

//Routas
router.get('/test', test.get); 
router.get('/testMongo', testMongo.get); 


//rutas de ballenas
router.get('/whale', whale.get); 
module.exports = router;