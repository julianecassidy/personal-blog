'use strict';

/**
 * personal-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::personal-blog.personal-blog');
