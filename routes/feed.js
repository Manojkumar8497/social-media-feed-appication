const router = require('express').Router();
const feedController = require('../controller/feed');
const upload = require('../config/multer');

// Get all feeds
router.get('/feeds', feedController.getAllFeed);

// Create new feed
router.post('/feed', upload.array('image'), feedController.createFeed);

// Update the like count
router.patch('/feeds/:id', feedController.updateFeedLikes);

module.exports = router;