import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import PartsSub from '../pageobjects/PartsSub.js'
import Page from '../pageobjects/page.js';
import NardiProducts from '../pageobjects/NardiProducts.js'
import Parts from '../pageobjects/PartsMain.js'
import Vibrant from '../pageobjects/PartsSub.js'




describe('Parts Dropdown Sub', () => {
    it('Test', async () => {
        browser.maximizeWindow();
        
        await Parts.open();

        //await PartsSub.Advan();

        //await PartsSub.ACT();

        //await PartsSub.ARP();

        //await PartsSub.ChaseBays(); 

        await PartsSub.Deatschwerks();
    })
})