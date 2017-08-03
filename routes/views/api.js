var keystone = require('keystone');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var locals = res.locals;
    console.log('test', req.params.article);

    // Set locals
    locals.filters = {
        article: req.params.article,
    };
    locals.data = {
        articles: [],
    };

    var q = keystone.list('Post').model.find().where('state', 'published')
        .sort('-publishedDate').populate('author');

    q.exec(function(err, results) {
        res.json(results);
    });
})

router.get('/:slug', function(req, res) {
    var locals = res.locals;
    var slug = req.params.slug;
    console.log("api got slug:", slug);

    var q = keystone.list('Post').model.findOne({
        state: 'published',
        slug: slug,
    }).populate('author');

    q.exec(function(err, results) {
        res.json(results);
    });
})

exports = module.exports = router;