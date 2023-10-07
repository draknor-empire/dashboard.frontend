module.exports = [
    {
      preset: 'jest-preset-angular',
      setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
      globals: {
        'ts-jest': {
          tsconfig: 'tsconfig.spec.json',
        },
      },
      testPathIgnorePatterns: ['node_modules'],
    },
  ];
  