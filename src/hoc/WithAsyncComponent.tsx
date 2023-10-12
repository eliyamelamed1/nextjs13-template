import React from 'react'

// @ts-expect-error no time to check type
export default function WithSuspense(WrappedComponent, getPromise) {
  // @ts-expect-error no time to check type
  async function withAsync(props) {
    const data = await getPromise

    return <WrappedComponent data={data} {...props} />
  }

  return withAsync
}
