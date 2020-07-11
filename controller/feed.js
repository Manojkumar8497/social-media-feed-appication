const Feed = require('../model/feedModel');

// Get All the feeds with pagination
exports.getAllFeed = async (req, res, next) => {
    // Access the provided 'page' and 'limt' query parameters
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let results = {};

    if (endIndex < await Feed.countDocuments().exec()) {
        results.next = {
            page: page + 1,
            limit
        }
    }

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit
        }
    }

    try {
        results.feeds = await Feed.find({}, null, { sort: { createdAt: -1 } }).limit(limit).skip(startIndex).exec();
        return res.status(200).json(results);
    }
    catch (error) {
        error.location = "Pagination";
        next(error);
    }
}

// Create a new Feed
exports.createFeed = async (req, res, next) => {

    // Check the request body has the content
    if (!req.body.content && !req.files) {
        return res.status(404).json({
            message: 'Please fill the needed fields',
            success: false
        })
    }

    try {
        // Check the request has the file object or not
        const file = req.files ? req.files[0] : '';
        const content = req.body.content;

        // Assign the data's to Feed Model
        const feed = new Feed({
            content: content ? content : '',
            image: file ? {
                imageName: file.originalname,
                imagePath: req.protocol + '://' + req.get('host') + '/' + file.path.replace("\\", "/")
            } : {}
        })

        const response = await feed.save();

        // Send the success response
        return res.status(200).json({
            feed: response,
            success: true
        })
    }
    catch (error) {
        error.location = 'Create New Feed';
        next(error);
    }
}

// Update the like count
exports.updateFeedLikes = async (req, res, next) => {
    // To check the feed id
    if (!req.params.id) {
        return res.status(404).json({
            message: 'Feed not found',
            success: false
        })
    }

    try {
        const feed = await Feed.findOneAndUpdate({ _id: req.params.id }, { $inc: { 'likes': 1 } });
        // Send the success response
        return res.status(200).json({
            feed: feed,
            success: true
        })
    }
    catch (error) {
        error.location = 'Update Feed';
        next(error);
    }
}