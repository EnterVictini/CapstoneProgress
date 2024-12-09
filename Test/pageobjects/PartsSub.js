import { $ } from '@wdio/globals'
import Page from './page.js';
import Parts from '../pageobjects/PartsMain.js'

class PartsSub extends Page {
    async PartsSub () {
    await Parts.Parts();
    }

    async Advan () {
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

    const BMW = await $('//a[@class="m-link" and contains(text(), "BMW")]');
    await RSX.waitForExist({ timeout: 5000});
    await RSX.waitForDisplayed({ timeout: 5000 });
    expect(RSX).toBeDisplayed();
    await RSX.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    const E36 = await $('//a[@class="m-link" and contains(text(), "E36")]');
    await RSX.waitForExist({ timeout: 5000});
    await RSX.waitForDisplayed({ timeout: 5000 });
    expect(RSX).toBeDisplayed();
    await RSX.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    const M3 = await $('//a[@class="m-link" and contains(text(), "M3")]');
    await RSX.waitForExist({ timeout: 5000});
    await RSX.waitForDisplayed({ timeout: 5000 });
    expect(RSX).toBeDisplayed();
    await RSX.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    const Mazda = await $('//a[@class="m-link" and contains(text(), "Mazda")]');
    await Mazda.waitForExist({ timeout: 5000});
    await Mazda.waitForDisplayed({ timeout: 5000 });
    expect(Mazda).toBeDisplayed();
    await Mazda.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    const Miata = await $('//a[@class="m-link" and contains(text(), "Miata")]');
    await Miata.waitForExist({ timeout: 5000});
    await Miata.waitForDisplayed({ timeout: 5000 });
    expect(Miata).toBeDisplayed();
    await Miata.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    const RX7 = await $('//a[@class="m-link" and contains(text(), "RX7")]');
    await RX7.waitForExist({ timeout: 5000});
    await RX7.waitForDisplayed({ timeout: 5000 });
    expect(RX7).toBeDisplayed();
    await RX7.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    const RX8 = await $('//a[@class="m-link" and contains(text(), "RX8")]');
    await RX8.waitForExist({ timeout: 5000});
    await RX8.waitForDisplayed({ timeout: 5000 });
    expect(RX8).toBeDisplayed();
    await RX8.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    const Nissan = await $('//a[@class="m-link" and contains(text(), "Nissan")]');
    await Nissan.waitForExist({ timeout: 5000});
    await Nissan.waitForDisplayed({ timeout: 5000 });
    expect(Nissan).toBeDisplayed();
    await Nissan.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    const TwoFortySX = await $('//a[@class="m-link" and contains(text(), "240SX")]');
    await TwoFortySX.waitForExist({ timeout: 5000});
    await TwoFortySX.waitForDisplayed({ timeout: 5000 });
    expect(TwoFortySX).toBeDisplayed();
    await TwoFortySX.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    const ThreeHundredZX = await $('//a[@class="m-link" and contains(text(), "300ZX")]');
    await ThreeHundredZX.waitForExist({ timeout: 5000});
    await ThreeHundredZX.waitForDisplayed({ timeout: 5000 });
    expect(ThreeHundredZX).toBeDisplayed();
    await ThreeHundredZX.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    const ThreeFiftyZ = await $('//a[@class="m-link" and contains(text(), "350Z")]');
    await ThreeFiftyZ.waitForExist({ timeout: 5000});
    await ThreeFiftyZ.waitForDisplayed({ timeout: 5000 });
    expect(ThreeFiftyZ).toBeDisplayed();
    await ThreeFiftyZ.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    const Subaru = await $('//a[@class="m-link" and contains(text(), "Subaru")]');
    await Subaru.waitForExist({ timeout: 5000});
    await Subaru.waitForDisplayed({ timeout: 5000 });
    expect(Subaru).toBeDisplayed();
    await Subaru.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });

    const BRZ = await $('//a[@class="m-link" and contains(text(), "BRZ")]');
    await BRZ.waitForExist({ timeout: 5000});
    await BRZ.waitForDisplayed({ timeout: 5000 });
    expect(BRZ).toBeDisplayed();
    await BRZ.moveTo();

    await browser.executeAsync(async (done) => {
        setTimeout(() => {
                done();
        }, 600); 
    });
    }

    async ARP () {

    }

    async ChaseBays () {

    }

    async Deatschwerks () {

    }

    async Enkei () {

    }

    async Fifteen52 () {

    }

    async FunkMotorsport () {

    }

    async Garrett () {

    }

    async GramLights () {

    }

    async Greddy () {

    }

    async HKS () {

    }

    async ISRperformance () {

    }

    async Kansei () {

    }

    async KillAllWipers () {

    }

    async KoyoRadiators () {

    }

    async Mishimoto () {

    }

    async MOMO () {

    }

    async NRG () {

    }

    async RbRebuilds () {

    }

    async SeemsLegitGarage () {

    }

    async SPAL () {

    }

    async Sparco () {

    }

    async Turbosmart () {
        
    }
    
    open () {
        return super.open();
    } 
}
export default new PartsSub();
