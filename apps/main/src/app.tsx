import { ErrorBoundary, Suspense } from "solid-js"

import { Feature } from "./feat"

function App() {
  return (
    <ErrorBoundary fallback="whoops">
      <Suspense fallback="loading...">
        <Feature />
      </Suspense>
    </ErrorBoundary>
  )
}

export { App }
