
import {expect, test} from '@playwright/test'

test.beforeEach('auto wait',async({page})=>{
await page.goto('http://uitestingplayground.com/ajax')
await page.getByText('Button Triggering AJAX Request').click()
})
    
test('auto wait',async ({page})=>{

const successbutton = page.locator('.bg-success')
await successbutton.click()
})




