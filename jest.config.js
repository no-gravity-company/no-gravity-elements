require('./esbuild.js');

module.exports = {
    resetModules: true,
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': 'esbuild-jest',
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
            useESM: true,
        },
    },
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: ['<rootDir>/tests/fixtures'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    extensionsToTreatAsEsm: ['.ts'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    testMatch: ['**/?(*.)(spec).ts?(x)'],
    moduleDirectories: ['node_modules'],
};
