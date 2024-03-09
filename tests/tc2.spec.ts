import {expect, test} from '@playwright/test'

test.beforeEach(async({page})=>{
        await page.goto('http://localhost:4200/');
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
})


test('Locators syntax ',async ({page})=>{
  // await page.locator('input').first().click()
    const basicForm=page.locator('nb-card').filter({hasText: "Basic form"})
    const emailField=basicForm.getByRole('textbox', {name: "Email"})
    const passwordField=basicForm.getByRole('textbox', {name: "Password"})

    await emailField.fill('Welcome@test.com')
    await passwordField.fill('Welcome123')
    await basicForm.getByRole('button').click()

    await expect(emailField).toHaveValue('Welcome@test.com')

})


//expect(received).toEqual(expected)

test('extract value ', async ({page})=>{

const basicForm = page.locator('nb-card').filter({hasText:"Basic form"})
const buttontext=await basicForm.locator('button').textContent()
await expect(buttontext).toEqual("Submit")


const allradriobutton= await page.locator('nb-radio').allTextContents()
expect(allradriobutton).toContain("Option 1")

})









