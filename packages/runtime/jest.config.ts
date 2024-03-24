import type {Config} from 'jest';

export default ({
  displayName: 'runtime',
  preset: '../../jest.preset.js',
  testMatch: [
    '<rootDir>/test/**/*.test.ts',
    '<rootDir>/test/**/*.test.tsx'
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[jt]sx?$': [
      'ts-jest',
      {tsconfig: '<rootDir>/tsconfig.test.json'}
    ]
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx'
  ],
  coverageDirectory: '../../coverage/packages/runtime'
} as Config);
