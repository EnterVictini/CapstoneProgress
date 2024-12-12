import Parts from '../pageobjects/PartsMain.js'


describe('Parts Dropdown Main', () => {
    it('Test', async () => {
        await Parts.open();

        await Parts.PartsOpen();
        
        await Parts.PartsDropdown();
    })
})

