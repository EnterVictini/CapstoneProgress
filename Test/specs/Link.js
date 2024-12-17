import LinkAccessories from '../pageobjects/LinkAccessories.js' 

describe('Link Accessories Sort Dropdown', () => {
    it('Test', async () => {
        await LinkAccessories.JimmyO();

        await LinkAccessories.LinkDropDown();
    })
})