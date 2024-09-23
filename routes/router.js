const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemController');

// Updated routes
router.get('/', controller.homepage); 
router.get('/about', controller.about); 
router.get('/contact', controller.contact); 
router.get('/services', controller.services); 
router.get('/faq', controller.faq); 
router.get('/testimonials', controller.testimonials); 
router.get('/portfolio', controller.portfolio);

module.exports = router;
