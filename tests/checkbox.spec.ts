
import {expect, test} from '@playwright/test'
import { delay } from 'rxjs-compat/operator/delay'

test.beforeEach('auto wait',async({page})=>{
      await page.goto('http://localhost:4200/')
})
    

test('checkbox page',async ({page}) =>{ 
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()   



    await page.getByRole('checkbox',{name: "Hide on click"}).check({force:true})


    await page.getByRole('checkbox',{name: "Hide on click"}).uncheck({force:true})


    const allcheckbox = page.getByRole('checkbox')
    for(const box of await allcheckbox.all()){

         await box.check({force: true})
         expect(await box.isChecked()).toBeTruthy()


         await box.uncheck({force: true})
         expect(await box.isChecked()).toBeFalsy()
    }
})

