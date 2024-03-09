import {expect, test} from '@playwright/test'

test.only('asseeeeeertion',async({page})=>{
    const value =5
    expect(value).toEqual(5)
    
})
    