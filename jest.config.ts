import type {Config} from 'jest';
import {getJestProjects} from '@nx/jest';

export default ({
  projects: getJestProjects()
} as Config);
