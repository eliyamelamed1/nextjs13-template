import React, { Suspense } from 'react'

const DEFAULT_FALLBACK = null

export default function WithSuspense(
  // @ts-expect-error no time to check type
  WrappedComponent,
  defaultFallback = DEFAULT_FALLBACK
) {
  function withSuspense({ fallback = defaultFallback, ...props }) {
    return (
      <Suspense fallback={fallback}>
        <WrappedComponent {...props} />
      </Suspense>
    )
  }

  return withSuspense
}
