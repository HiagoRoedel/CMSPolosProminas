'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('teste-remove-menu')
      .service('myService')
      .getWelcomeMessage();
  },
});
