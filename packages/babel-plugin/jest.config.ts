import type {Config} from 'jest';

export default ({
  displayName: 'babel-plugin',
  preset: '../../jest.preset.js',
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[jt]s$': [
      'ts-jest',
      {tsconfig: '<rootDir>/tsconfig.test.json'}
    ]
  },
  moduleFileExtensions: [
    'js',
    'ts'
  ],
  coverageDirectory: '../../coverage/packages/babel-plugin'
} as Config);
