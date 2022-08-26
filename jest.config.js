module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['**/src/**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleNameMapper: {
    '^@atoms': '<rootDir>/src/app/shared/components/atoms/index',
  },
  setupFiles: ['<rootDir>/src/tests/unit/index.ts'],
};
