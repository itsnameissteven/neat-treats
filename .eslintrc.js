module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-neat-treats`
  extends: ['neat-treats'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
