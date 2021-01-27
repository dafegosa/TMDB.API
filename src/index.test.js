import puppeteer from 'puppeteer'
import { cleanup, render } from '@testing-library/react'
import Dashboard from './components/Dashboard'

describe('index', () => {
  xit('should redirect to Spotify Auth after clicking the button', async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()

    await page.goto('http://localhost:3000')

    await page.waitForSelector('button[data-testId="loginButton"]')
    await page.click('button[data-testId="loginButton"]')

    const { container } = render(
      <a
        className='spotify-logo'
        tabindex='-1'
        title='Spotify'
        ng-href='/es'
        href='/es'
      ></a>
    )
    expect(container.firstChild.classList.contains('spotify-logo')).toBe(true)
    await page.waitFor(3000)
    await browser.close()
  }, 60000),
    it('should redirect to Spotify Auth after clicking the button', async () => {
      const browser = await puppeteer.launch({ headless: false })
      const page = await browser.newPage()
      await page.goto('http://localhost:3000/redirect')
      await page.waitForSelector('button[data-testId="loginButton"]')
      await page.click('button[data-testId="loginButton"]')
      await page.waitForSelector('#login-username')
      await page.type('#login-username', 'testingcount777@gmail.com', {
        delay: 80,
      })
      await page.type('#login-password', 'Spotify777', {
        delay: 80,
      })
      await page.click('#login-button')
      await page.waitForSelector('#auth-accept')
      await page.click('#auth-accept')
      await page.waitForSelector('label[data-testId="testingText"]')
    }, 30000)
})
