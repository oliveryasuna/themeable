// Based on Emotion.
const weakMemoize = (<Arg extends WeakKey, Return>(fn: (arg: Arg) => Return): ((arg: Arg) => Return) => {
  const cache: WeakMap<Arg, Return> = (new WeakMap());

  return ((arg: Arg): Return => {
    if(cache.has(arg)) {
      return cache.get(arg)!;
    }

    const result = fn(arg);

    cache.set(arg, result);

    return result;
  });
});

export {
  weakMemoize
};
