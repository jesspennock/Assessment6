
import { Builder, Capabilities, By } from "selenium-webdriver"
import { isExportDeclaration } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("Does clicking the draw button disply the div with id = choices", async () => {
    await driver.findElement(By.id("draw")).click()
    const choicesDisplayed =  await driver.findElement(By.id("choices")).isDisplayed()
    expect(choicesDisplayed).toBe(true)
})
test("Does clicking the add to duo button display the div with id=player duo", async () => {
    await driver.findElement(By.id("draw")).click()
    await driver.findElement(By.className("bot-btn")).click()
    const playerDuoDisplayed = await driver.findElement(By.id("player-duo")).isDisplayed()
    expect(playerDuoDisplayed).toBe(true)
})
