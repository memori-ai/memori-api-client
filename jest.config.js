/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  silent: true,
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/esm/', '/example/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [],
};
