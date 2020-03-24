/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';

export default function useObjectSlice(object, keys) {
  const cacheKeys = useMemo(() => keys.map(key => object[key]), [object, keys]);

  const cachedSlice = useMemo(() => {
    return keys.reduce((slice, key) => {
      slice[key] = object[key];
      return slice;
    }, {});
  }, cacheKeys);

  return cachedSlice;
}
