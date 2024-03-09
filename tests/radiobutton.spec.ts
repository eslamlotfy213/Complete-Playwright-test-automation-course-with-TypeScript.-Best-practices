
import {expect, test} from '@playwright/test'
import { delay } from 'rxjs-compat/operator/delay'

test.beforeEach('auto wait',async({page})=>{
      await page.goto('http://localhost:4200/')
})
    

test.describe('form layout page',()=>{
   
    
    test.beforeEach(async({page})=>{
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
    })

    
    test('input field ',async({page})=>{
    const usingThegridForm =page.locator('nb-card').filter({hasText: "Using the Grid"})
    await usingThegridForm.getByLabel("Option 2").check({force: true})
    }) 

      


})
