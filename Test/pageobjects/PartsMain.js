import { $ } from '@wdio/globals'
import Page from './page.js';


class Parts extends Page {
    get HomeLogo () {
        return $('.site-header__logo-link.logo--has-inverted')
    }
    get PartsButton () {
        return $('//a[@class="site-nav__link site-nav__link--underline"]')
    }

    async PartsOpen () {
        await this.PartsButton.click();
        const element = await $('//a[@class="site-nav__link site-nav__link--underline"]');
        await element.waitForExist({ timeout: 5000})
        expect(element).toBeDisplayed();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

    }

    
    async PartsDropdown () {
        const Advan = await $('//a[@class="m-link" and contains(text(), "ADVAN")]');
        await Advan.waitForExist({ timeout: 5000});
        await Advan.waitForDisplayed({ timeout: 5000 });
        expect(Advan).toBeDisplayed();
        await Advan.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const ACT = await $('//a[@class="m-link" and contains(text(), "ACT")]');
        await ACT.waitForExist({ timeout: 5000});
        await ACT.waitForDisplayed({ timeout: 5000 });
        expect(ACT).toBeDisplayed();
        await ACT.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const ARP = await $('//a[@class="m-link" and contains(text(), "ARP")]');
        await ARP.waitForExist({ timeout: 5000});
        await ARP.waitForDisplayed({ timeout: 5000 });
        expect(ARP).toBeDisplayed();
        await ARP.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const ChaseBays = await $('//a[@class="m-link" and contains(text(), "Chase Bays")]');
        await ChaseBays.waitForExist({ timeout: 5000});
        await ChaseBays.waitForDisplayed({ timeout: 5000 });
        expect(ChaseBays).toBeDisplayed();
        await ChaseBays.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Deatschwerks = await $('//a[@class="m-link" and contains(text(), "Deatschwerks")]');
        await Deatschwerks.waitForExist({ timeout: 5000});
        await Deatschwerks.waitForDisplayed({ timeout: 5000 });
        expect(Deatschwerks).toBeDisplayed();
        await Deatschwerks.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Enkei = await $('//a[@class="m-link" and contains(text(), "Enkei")]');
        await Enkei.waitForExist({ timeout: 5000});
        await Enkei.waitForDisplayed({ timeout: 5000 });
        expect(Enkei).toBeDisplayed();
        await Enkei.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Fifteen52 = await $('//a[@class="m-link" and contains(text(), "Fifteen52")]');
        await Fifteen52.waitForExist({ timeout: 5000});
        await Fifteen52.waitForDisplayed({ timeout: 5000 });
        expect(Fifteen52).toBeDisplayed();
        await Fifteen52.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const FunkMotorsports = await $('//a[@class="m-link" and contains(text(), "Funk Motorsport")]');
        await FunkMotorsports.waitForExist({ timeout: 5000});
        await FunkMotorsports.waitForDisplayed({ timeout: 5000 });
        expect(FunkMotorsports).toBeDisplayed();
        await FunkMotorsports.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Garrett = await $('//a[@class="m-link" and contains(text(), "Garrett")]');
        await Garrett.waitForExist({ timeout: 5000});
        await Garrett.waitForDisplayed({ timeout: 5000 });
        expect(Garrett).toBeDisplayed();
        await Garrett.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const GramLights = await $('//a[@class="m-link" and contains(text(), "Gram Lights")]');
        await GramLights.waitForExist({ timeout: 5000});
        await GramLights.waitForDisplayed({ timeout: 5000 });
        expect(GramLights).toBeDisplayed();
        await GramLights.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Greddy = await $('//a[@class="m-link" and contains(text(), "Greddy")]');
        await Greddy.waitForExist({ timeout: 5000});
        await Greddy.waitForDisplayed({ timeout: 5000 });
        expect(Greddy).toBeDisplayed();
        await Greddy.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const HKS = await $('//a[@class="m-link" and contains(text(), "HKS")]');
        await HKS.waitForExist({ timeout: 5000});
        await HKS.waitForDisplayed({ timeout: 5000 });
        expect(HKS).toBeDisplayed();
        await HKS.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const ISRperformance = await $('//a[@class="m-link" and contains(text(), "ISR Performance")]');
        await ISRperformance.waitForExist({ timeout: 5000});
        await ISRperformance.waitForDisplayed({ timeout: 5000 });
        expect(ISRperformance).toBeDisplayed();
        await ISRperformance.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Kansei = await $('//a[@class="m-link" and contains(text(), "Kansei")]');
        await Kansei.waitForExist({ timeout: 5000});
        await Kansei.waitForDisplayed({ timeout: 5000 });
        expect(Kansei).toBeDisplayed();
        await Kansei.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const KillAllWipers = await $('//a[@class="m-link" and contains(text(), "KILL ALL WIPERS")]');
        await KillAllWipers.waitForExist({ timeout: 5000});
        await KillAllWipers.waitForDisplayed({ timeout: 5000 });
        expect(KillAllWipers).toBeDisplayed();
        await KillAllWipers.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const KoyoRadiators = await $('//a[@class="m-link" and contains(text(), "Koyo Radiators")]');
        await KoyoRadiators.waitForExist({ timeout: 5000});
        await KoyoRadiators.waitForDisplayed({ timeout: 5000 });
        expect(KoyoRadiators).toBeDisplayed();
        await KoyoRadiators.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Mishimoto = await $('//a[@class="m-link" and contains(text(), "Mishimoto")]');
        await Mishimoto.waitForExist({ timeout: 5000});
        await Mishimoto.waitForDisplayed({ timeout: 5000 });
        expect(Mishimoto).toBeDisplayed();
        await Mishimoto.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const MOMO = await $('//a[@class="m-link" and contains(text(), "MOMO")]');
        await MOMO.waitForExist({ timeout: 5000});
        await MOMO.waitForDisplayed({ timeout: 5000 });
        expect(MOMO).toBeDisplayed();
        await MOMO.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RbRebuilds = await $('//a[@class="m-link" and contains(text(), "RB-Rebuilds")]');
        await RbRebuilds.waitForExist({ timeout: 5000});
        await RbRebuilds.waitForDisplayed({ timeout: 5000 });
        expect(RbRebuilds).toBeDisplayed();
        await RbRebuilds.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const SeemsLegitGarage = await $('//a[@class="m-link" and contains(text(), "Seems Legit Garage")]');
        await SeemsLegitGarage.waitForExist({ timeout: 5000});
        await SeemsLegitGarage.waitForDisplayed({ timeout: 5000 });
        expect(SeemsLegitGarage).toBeDisplayed();
        await SeemsLegitGarage.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const SPAL = await $('//a[@class="m-link" and contains(text(), "SPAL")]');
        await SPAL.waitForExist({ timeout: 5000});
        await SPAL.waitForDisplayed({ timeout: 5000 });
        expect(SPAL).toBeDisplayed();
        await SPAL.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Sparco = await $('//a[@class="m-link" and contains(text(), "Sparco")]');
        await Sparco.waitForExist({ timeout: 5000});
        await Sparco.waitForDisplayed({ timeout: 5000 });
        expect(Sparco).toBeDisplayed();
        await Sparco.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Turbosmart = await $('//a[@class="m-link" and contains(text(), "Turbosmart")]');
        await Turbosmart.waitForExist({ timeout: 5000});
        await Turbosmart.waitForDisplayed({ timeout: 5000 });
        expect(Turbosmart).toBeDisplayed();
        await Turbosmart.moveTo();

        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Vibrant = await $('//a[@class="m-link" and contains(text(), "Vibrant")]');
        await Vibrant.waitForExist({ timeout: 5000});
        await Vibrant.waitForDisplayed({ timeout: 5000 });
        expect(Vibrant).toBeDisplayed();
        await Vibrant.moveTo();

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
export default new Parts();