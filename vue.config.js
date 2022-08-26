const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],

  configureWebpack: {
    resolve: {
      alias: {
        '@shared': path.resolve(__dirname, 'src/app/shared'),
        '@atoms': path.resolve(__dirname, 'src/app/shared/components/atoms/index'),
      },
    },
  },
});
