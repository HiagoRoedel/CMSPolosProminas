'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('my-first-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
