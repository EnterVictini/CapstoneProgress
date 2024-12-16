//import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Functions from '../pageobjects/PartsFunctions.js'
import Brands from '../pageobjects/PartsArray.js'
import Selectors from '../pageobjects/Selectors.js'

describe('Test', () => {
    it('Test', async () => {
        await Functions.open();
        await Functions.PartsOpen();
        await Brands.PartsMains();
        await Brands.BrandsFunction();
        await Brands.processBrands();
        //await Brands.ACT();
        //await Brands.BrandsFunction();
        //await Brands.processACT();
        
    })
})