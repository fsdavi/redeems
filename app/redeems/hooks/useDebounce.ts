import { useEffect, useMemo } from "react";
import _ from "lodash";

function useDebounce<T extends (...args: any[]) => any>(
  handler: T,
  wait: number,
  immediate: boolean = false
): T {
  const debounced = useMemo(
    () => _.debounce(handler, wait, { leading: immediate, trailing: !immediate }),
    [handler, wait, immediate]
  );

  useEffect(() => {
    return () => {
      debounced.cancel();
    };
  }, [debounced]);

  return debounced as unknown as T;
}

export default useDebounce;
