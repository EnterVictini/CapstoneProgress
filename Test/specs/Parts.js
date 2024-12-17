import Functions from '../pageobjects/PartsFunctions.js'
import Brands from '../pageobjects/PartsArray.js'

describe('Test', () => {
    it('Test', async () => {
        await Functions.JimmyO();

        await Functions.PartsOpen();

        await Brands.PartsMains();

        await Brands.BrandsFunction();

        await Brands.processBrands();
    })
})