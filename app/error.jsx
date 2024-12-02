'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log({ error: error.message })
  }, [error])
  return (
    <div>
      <h2 className="text-sm text-rose-400">something went wrong - from app</h2>
      {/* <button onClick={reset()}>Try again</button> */}
    </div>
  )
}
