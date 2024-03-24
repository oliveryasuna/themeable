import {hasDefault} from '@oliveryasuna/themeable-utils';

// const getValue = (<T extends (Record<string, unknown> | unknown[])>(obj: T, path: (T extends Record<string, unknown> ? string : number)): any => {
const getValue = (<T extends (Record<string, unknown> | unknown[])>(obj: T, path: string): any => {
  // // noinspection SuspiciousTypeOfGuard
  // const keys: (string | number)[] = ((typeof path === 'string') ? path.split('.') : [path]);
  const keys: string[] = path.split('.');

  let currentObj: any = obj;

  for(const key of keys) {
    if(!currentObj || (typeof currentObj !== 'object')) {
      return undefined;
    }

    currentObj = currentObj[key];
  }

  if(hasDefault(currentObj)) {
    return currentObj.__default;
  } else {
    return currentObj;
  }
});

export {
  hasDefault,
  getValue
};
