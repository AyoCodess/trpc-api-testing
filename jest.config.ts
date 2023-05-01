// Jest configuration for Typescript
const config = {
  clearMocks: true, // clear mocks before every test
  coverageProvider: "v8", // use the v8 coverage provider
  preset: "ts-jest/presets/js-with-ts", // use the js-with-ts preset to allow jest to handle both .js and .ts files
  setupFiles: ["dotenv/config"], // anything set in the .env file will be available in the test environment
  transform: {
    "^.+\\.mjs$": "ts-jest",
  }, // transform .mjs files with ts-jest
  moduleNameMapper: {
    "~/(.*)": ["<rootDir>/src/$1"],
    "@/(.*)": ["<rootDir>/src/$1"],
  }, // allow the use of ~ and @ to reference the src directory
};

export default config;
