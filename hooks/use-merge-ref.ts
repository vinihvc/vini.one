import React from "react";

export const useMergeRefs = <T>(...refs: (ReactRef<T> | undefined)[]) => {
  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (node: T) => {
      for (const ref of refs) {
        if (ref) {
          assignRef(ref, node);
        }
      }
    };
  }, [refs]);
};

type ReactRef<T> = React.Ref<T> | React.MutableRefObject<T>;

export const assignRef = <T>(ref: ReactRef<T> | undefined, value: T) => {
  if (ref == null) {
    return;
  }

  if (typeof ref === "function") {
    ref(value);
    return;
  }

  try {
    ref.current = value;
  } catch {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
};
