module.exports = {
  preset: "jest-preset-angular",
  roots: ["src"],
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  setupFilesAfterEnv: ["./setupJest.ts"],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
};
