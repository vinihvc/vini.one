import React from 'react'

export const useMergeRefs = <T>(...refs: (ReactRef<T> | undefined)[]) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null
    }
    return (node: T) => {
      // biome-ignore lint/complexity/noForEach: <explanation>
      refs.forEach((ref) => {
        if (ref) assignRef(ref, node)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs)
}

type ReactRef<T> = React.Ref<T> | React.MutableRefObject<T>

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const assignRef = <T = any>(ref: ReactRef<T> | undefined, value: T) => {
  if (ref == null) return

  if (typeof ref === 'function') {
    ref(value)
    return
  }

  try {
    // @ts-ignore
    ref.current = value
  } catch {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
  }
}
