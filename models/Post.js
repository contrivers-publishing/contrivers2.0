var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
});

Post.add({
    title: { type: String, required: true },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
    author: { type: Types.Relationship, ref: 'User', index: true },
    author2: { type: Types.Relationship, ref: 'User', index: true },
    author3: { type: Types.Relationship, ref: 'User', index: true },
    publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
    image: { type: Types.CloudinaryImage },
    content: {
        abstract: { type: Types.Html, wysiwyg: true, height: 150 },
        extended: { type: Types.Html, wysiwyg: true, height: 400 },
    },
    categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
    contentType: { type: Types.Select, options: 'essay, book review, interview, reading', default: 'essay', index: true },
    featured: { type: Boolean, label: 'Featured', index: true },
    hidden: { type: Boolean, label: 'Hidden', index: true },
    missed: { type: Boolean, label: 'Missed', index: true },
    footnotes: { type: Types.TextArray, wysiwyg: true, height: 150 },
    tags: { type: Types.TextArray },
});

Post.schema.virtual('content.full').get(function() {
    return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();