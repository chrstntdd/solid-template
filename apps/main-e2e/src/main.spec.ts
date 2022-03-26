import { test, expect } from "@playwright/test"
import type { Page } from "@playwright/test"
import { resolve } from "path"

import { E2E_SCREENSHOT_DIR } from "../config"

async function setupPage(page: Page, baseURL: string) {
  await page.goto(baseURL, { waitUntil: "networkidle" })
}

test.describe("App e2e", () => {
  test.afterAll(async ({ browser }) => {
    await browser.close()
  })

  test("shows the heading", async ({ page, baseURL }) => {
    await setupPage(page, baseURL!)
    let heading = page.locator("h2")

    expect(await heading.textContent()).toEqual("ferrothorn")

    await page.screenshot({
      path: resolve(E2E_SCREENSHOT_DIR, "main-0.png")
    })
  })
})
