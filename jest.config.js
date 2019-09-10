module.exports = {
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js"
    ],
    transformIgnorePatterns:["/node_modules/"],
    testMatch: [
         "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" 
    ],
    "transform": {
        "\\.js$": "<rootDir>/node_modules/babel-jest"
      },
    globals: {
      "ts-jest": {
        useBabelrc: true,
       
      }
    },
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
          "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
      },
    coveragePathIgnorePatterns: [
      "/node_modules/",
      "enzyme.js"
    ],
    setupTestFrameworkScriptFile: "<rootDir>/enzyme.js",
    coverageReporters: [
      "json",
      "lcov",
      "text",
      "text-summary"
    ],
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/mocks.js",
      "\\.(css|less|scss)$": "<rootDir>/__mocks__/mocks.js"
    }
  };
  