import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 1025, height: 800}})

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Navigation laptop', () => {
  
  test('has sign in link visible',async ({ page }) => {
      const signInLink = await page.getByRole('link', {name: /sign in/i})
      // await page.locator('button[data-open-btn]').click()
      await signInLink.waitFor()
      expect(signInLink).toBeVisible()
    
  })
  
    test('has "Try for free" button hidden',async ({ page }) => {
      const tryForfreeBtn = await page.getByRole('button', {name: /try for free/i})
      // await page.locator('button[data-open-btn]').click()
      await tryForfreeBtn.waitFor()
      expect(tryForfreeBtn).toBeVisible()
    })

})