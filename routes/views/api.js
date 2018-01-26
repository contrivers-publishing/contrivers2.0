var keystone = require('keystone');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var locals = res.locals;

    // Set locals
    locals.filters = {
        article: req.params.article,
    };
    locals.data = {
        articles: [],
    };

    var q = keystone.list('Post').model.find().where('state', 'published')
        .sort('-publishedDate').populate('author categories');

    q.exec(function(err, results) {
        res.json(results);
    });
});

router.get('/featured', function(req, res) {
    var q = keystone.list('Post').model.find({
        state: 'published',
        featured: true
    }).sort('-publishedDate').populate('author categories');

    q.exec(function(err, results) {
        res.json(results);
    });
});

router.get('/missed', function(req, res) {
    var q = keystone.list('Post').model.find({
        state: 'published',
        missed: true
    }).sort('-publishedDate').populate('author categories');

    q.exec(function(err, results) {
        res.json(results);
    });
});

router.get('/page', function(req, res) {
    var q = keystone.list('Page').model.find({
        state: 'published'
    }).sort('-updatedDate');

    q.exec(function(err, results) {
        res.json(results);
    });
});

router.get('/page/:slug', function(req, res) {
    var locals = res.locals;
    var slug = req.params.slug;

    var q = keystone.list('Page').model.findOne({
        state: 'published',
        slug: slug,
    }).sort('-updatedDate');

    q.exec(function(err, results) {
        res.json(results);
    });
});

router.get('/:slug', function(req, res) {
    var locals = res.locals;
    var slug = req.params.slug;

    var q = keystone.list('Post').model.findOne({
        state: 'published',
        slug: slug,
    }).sort('-publishedDate').populate('author author2 author3 categories');

    q.exec(function(err, results) {
        res.json(results);
    });
});

router.post('/subscribe/:email', function(req, res) {
    var email = req.params.email;
    var newPost = new Subscription.model({
        email: email,
        state: 'active'
    });

    newPost.save(function(err) {
        console.log('Thanks for subscribing');
    });
})

exports = module.exports = router;