module.exports = function () {
  return {
    testFramework: "jest",
    env: { type: "node" },
    tests: ["src/tests/**/*.test.js"],
    files: ["**/*.js", "!node_modules/**/*", "!**/*.test.js", "!**/.*"],
  };
};
