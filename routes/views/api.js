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

router.get('/:slug', function(req, res) {
    var locals = res.locals;
    var slug = req.params.slug;

    var q = keystone.list('Post').model.findOne({
        state: 'published',
        slug: slug,
    }).sort('-publishedDate').populate('author categories');

    q.exec(function(err, results) {
        res.json(results);
    });
});

exports = module.exports = router;