import {weakMemoize} from '@oliveryasuna/themeable-utils';

describe('weakMemoize function', ((): void => {
  test('caches the result for the same reference', ((): void => {
    const fn = jest.fn(x => x);
    const memoizedFn = weakMemoize(fn);

    const arg = {some: 'object'};
    const result1 = memoizedFn(arg);
    const result2 = memoizedFn(arg);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(result1).toBe(result2);
  }));

  test('does not cache the result for different references', ((): void => {
    const fn = jest.fn(x => x);
    const memoizedFn = weakMemoize(fn);

    const result1 = memoizedFn({some: 'object'});
    const result2 = memoizedFn({some: 'object'});

    expect(fn).toHaveBeenCalledTimes(2);
    expect(result1).not.toBe(result2);
  }));
}));
