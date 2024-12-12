import { browser } from '@wdio/globals'
import PartsSub from '../pageobjects/PartsSub.js'
import Parts from '../pageobjects/PartsMain.js'

describe('Parts Dropdown Sub', () => {
    it('Test', async () => {
        browser.maximizeWindow();
        
        await Parts.open();

        await PartsSub.Advan();

        await PartsSub.ACT();

        await PartsSub.ARP();

        await PartsSub.ChaseBays(); 

        await PartsSub.Deatschwerks();
    })
})