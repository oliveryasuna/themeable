import type {Config} from 'jest';

export default ({
  displayName: 'context',
  preset: '../../jest.preset.js',
  testMatch: [
    '<rootDir>/test/**/*.test.ts',
    '<rootDir>/test/**/*.test.tsx'
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
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
  coverageDirectory: '../../coverage/packages/context'
} as Config);
