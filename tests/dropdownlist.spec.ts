
import {expect, test} from '@playwright/test'
import { delay } from 'rxjs-compat/operator/delay'

test.beforeEach('auto wait',async({page})=>{
      await page.goto('http://localhost:4200/')
})
    

test('dropdownlist page',async ({page}) =>{ 


   const dropdown = page.locator('ngx-header nb-select')
   await dropdown.click(); 


   page.getByRole('list')  // when list has tag UL  tag
   page.getByRole('listitem')  // when the list has LI tag


    const optionlist = page.locator('nb-option-list nb-option')
    await expect(optionlist).toHaveText(["Light", "Dark","Cosmic","Corporate"])
    await optionlist.filter({hasText: "Cosmic"}).click()

})

