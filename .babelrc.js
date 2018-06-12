module.exports = {
  presets: [
    '@babel/typescript',
    ['@babel/env', { modules: false, loose: true }],
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
};
