
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

    const usingThegrid =page.locator('nb-card').filter({hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"})
    await usingThegrid.fill("test.test@com")
    await usingThegrid.clear()
    await usingThegrid.pressSequentially("test2.test@com",{delay:500})


   const inputvalue = await usingThegrid.inputValue()

   // generic assertion
      expect(inputvalue).toEqual('test2.test@com')


      //locator assertion
      await expect(usingThegrid).toHaveValue('test2.test@com')
}) 

      


})
