import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 600, height: 900 }, browserName: 'firefox' });

test.beforeEach(async ({page}) => {
  await page.goto('/')
})

test.describe('Navigation mobile', () => {

  test.describe('Header section', () => {

    test('has title', async ({ page }) => {

      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Slack es tu plataforma de productividad | Slack/i);
    });

    test('header has logo image', async ({ page }) => {
      await expect(
        page.getByAltText(/Slack logo/i)
      ).toBeVisible()
    })

    test('logo is linking to home page', async ({ page }) => {
      const logo = await page.getByAltText(/Slack logo/i)
      const link = await page.getByRole('link').filter({ has: logo })
      await expect(link).toHaveAttribute('href', '/')
      await link.click()
      await expect(page).toHaveURL('/')

    })

    test('has search button',async ({page}) => {
    const searchBtn = await page.locator('button[data-search]')
    await expect(searchBtn).toBeVisible()
    })

    test('has open buton', async ({ page }) => {
      const openBtn = await page.locator('.toggle-menu[data-open-btn]')
      await openBtn.waitFor()
      await expect(openBtn).toBeVisible()
    })

    test('has sign in link hidden',async ({ page }) => {
      const signInLink = await page.getByRole('link', {name: /sign in/i})
      await page.locator('button[data-open-btn]').click()
      // await signInLink.waitFor()
      expect(signInLink).toBeHidden()
    })
    
    test('has "Try for free" button hidden',async ({ page }) => {
      const tryForfreeBtn = await page.getByRole('button', {name: /try for free/i})
      await page.locator('button[data-open-btn]').click()
      // await signInLink.waitFor()
      expect(tryForfreeBtn).toBeHidden()
    })
    
    test.describe('Navigation', () => {

    test('has toggle element in nav (close button)', async ({ page }) => {
      const closeBtn = await page.locator('#header__nav .toggle-menu')
      await closeBtn.waitFor()
      await expect(closeBtn).toBeVisible()
    })

    test('has logo in nav level', async ({page}) => {
      const logoNav = page.locator('#header__nav img[alt="Logo slack nav"]')
      await logoNav.waitFor()
      expect(logoNav).toBeVisible() 
     })

     test('has link in nav logo, links to home', async ({page}) => { 
      const logoNav = page.getByAltText('Logo slack nav')
      const link = page.getByRole('link').filter({has: logoNav})
      await page.locator('button[data-open-btn]').click()

      await expect(link).toHaveAttribute('href', '/')
      await link.click()
      await expect(page).toHaveURL('/')

      })


    test('nav is initially hidden',async ({page}) => {
      const nav = await page.locator('nav#header__nav')
      await nav.waitFor()
      expect(nav).not.toBeInViewport()
    })

    test('display nav on toggle btn click', async ({page}) => {
      await page.locator('button[data-open-btn]').click()
      const nav = await page.locator('#header__nav')
      await nav.waitFor()
      expect(nav).toBeInViewport()
      expect(nav).toHaveCSS('background-color', 'rgb(255, 255, 255)')
     })


       test('should have navigation items', async ({ page}) => { 
          await expect(page.locator('#header__nav ul'))
            .toBeVisible()
          await expect(page.locator('#header__nav ul > li'))
            .toHaveText([
              'Product',
              'Solutions',
              'Enterprise',
              'Resources',
              'Pricing'
            ])
      })
    })

  })
})