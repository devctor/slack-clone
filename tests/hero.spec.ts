import { test, expect } from "@playwright/test";

test.use({ viewport: {width: 600, height: 900 }, browserName: 'chromium'})
test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Hero section', () => {

  test('has title',async ({ page }) => {
    const title = await page.getByRole('heading', { name: /Great teamwork starts with a digital HQ/i})
    expect(title).toHaveText(/starts/i)
  })

  test('has tagline',async ({ page }) => {
    const tagline = await page
    .getByRole('paragraph')
    .filter({ hasText: 'Slack'})
    expect(tagline).toHaveText(/for as long as you`d like/i)
  })

  test('has "Sign up with email button', async ({ page }) =>{       
    const emailBtn = page.getByRole('button', { name: /sign up with email/i})

    expect(emailBtn).toBeVisible()
   })
   
  test('has "Sign up with Google button', async ({ page }) =>{       
    const googleBtn = page.getByRole('button', { name: /sign up with google/i})
    const googleImg = page.getByAltText(/google logo in button/i)

    expect(googleBtn).toBeVisible()
   })

   test('has hero image', async ({ page }) => {
    const heroImg = page.getByAltText(/slack ui/i)
    expect(heroImg).toBeVisible()
   })
})