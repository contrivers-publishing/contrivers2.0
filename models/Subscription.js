var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Subscription Model
 * ==========
 */

var Page = new keystone.List('Subscription', {
    map: { name: 'email' }
});

Page.add({
    email: { type: Types.Email, required: true },
    state: { type: Types.Select, options: 'active, inactive', default: 'active', index: true },
    createdAt: { type: Date, default: Date.now },
});

Page.defaultColumns = 'email, state, createdAt';
Page.register();