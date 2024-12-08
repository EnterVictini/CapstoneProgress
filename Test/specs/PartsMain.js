import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import NardiProducts from '../pageobjects/10-functions.js'
import Parts from '../pageobjects/PartsMain.js'


describe('Parts Dropdown Main', () => {
    it('Test', async () => {
        await Parts.open();
        await Parts.PartsDropdown();
    })
})

