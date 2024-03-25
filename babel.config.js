module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@storage': './src/storage',
          '@atoms': './src/components/atoms',
          '@redux': './src/redux',
          '@layouts': './src/components/layouts',
          '@molecules': './src/components/molecules',
          '@navigation': './src/navigation',
          '@organisms': './src/components/organisms',
          '@pages': './src/pages',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
      },
    ],
    'transform-inline-environment-variables',
  ],
  retainLines: true,
};
