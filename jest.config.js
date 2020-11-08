/*/
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
/*/

// These paths are relative to the rootDir, which is ./test
const testPath = "**/*.test.ts";
const sourcePath = "src/**/*.ts";

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // Which files to collect coverage from
  collectCoverageFrom: [
    sourcePath,
    "!src/index.ts",
    "!src/server/**/*.ts",
    "!src/types/**/*.ts"
  ],

  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest/presets/default", 

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: [
    testPath
  ]
};
