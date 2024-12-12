import LinkAccessories from '../pageobjects/LinkAccessories.js' 

describe('Link Accessories Sort Dropdown', () => {
    it('Test', async () => {
        await LinkAccessories.open();

        await LinkAccessories.LinkDropDown();
    })
})