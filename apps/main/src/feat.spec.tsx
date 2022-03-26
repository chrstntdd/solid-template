import { test, expect } from "vitest"
import { render, screen } from "solid-testing-library"

import { Feature } from "./feat"

/**
 * Breaking with an issue outlined here
 * https://github.com/solidjs/solid-app-router/issues/79
 *
 * Trying to implement:
 * https://github.com/solidjs/templates/tree/master/ts-vitest
 *
 * Gonna have an e2e test cover this
 */
test.skip("smoke", () => {
  render(() => <Feature />)

  let title = screen.getByText("ferrothorn")

  expect(title).toBeInTheDocument()
})
