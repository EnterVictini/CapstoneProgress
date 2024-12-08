import { $ } from '@wdio/globals'
import Page from './page.js';
import Parts from '../pageobjects/PartsMain.js'

class PartsSub extends Page {
    async PartsSub () {
    await Parts.Parts();

    await Advan.moveTo();
    const RG4 = await $('//a[@class="m-link" and contains(text(), "RG4")]');
    await RG4.waitForExist({ timeout: 5000});
    await RG4.waitForDisplayed({ timeout: 5000 });
    expect(RG4).toBeDisplayed();
    await RG4.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });
    }

    async ACT () {
    await ACT.moveTo();
    const AcuraHonda = await $('//a[@class="m-link" and contains(text(), "Acura/Honda")]');
    await AcuraHonda.waitForExist({ timeout: 5000});
    await AcuraHonda.waitForDisplayed({ timeout: 5000 });
    expect(AcuraHonda).toBeDisplayed();
    await AcuraHonda.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    const Civic = await $('//a[@class="m-link" and contains(text(), "Civic")]');
    await Civic.waitForExist({ timeout: 5000});
    await Civic.waitForDisplayed({ timeout: 5000 });
    expect(Civic).toBeDisplayed();
    await Civic.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    
    const Integra = await $('//a[@class="m-link" and contains(text(), "Integra")]');
    await Integra.waitForExist({ timeout: 5000});
    await Integra.waitForDisplayed({ timeout: 5000 });
    expect(Integra).toBeDisplayed();
    await Integra.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    const S2000 = await $('//a[@class="m-link" and contains(text(), "S2000")]');
    await S2000.waitForExist({ timeout: 5000});
    await S2000.waitForDisplayed({ timeout: 5000 });
    expect(S2000).toBeDisplayed();
    await S2000.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    const RSX = await $('//a[@class="m-link" and contains(text(), "RSX")]');
    await RSX.waitForExist({ timeout: 5000});
    await RSX.waitForDisplayed({ timeout: 5000 });
    expect(RSX).toBeDisplayed();
    await RSX.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });
    }
    
    
    open () {
        return super.open();
    } 
}
export default new PartsSub();
