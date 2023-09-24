'use strict';

/**
 * order router
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order');
