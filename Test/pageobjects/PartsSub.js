import { $ } from '@wdio/globals'
import Page from './page.js';
import Parts from '../pageobjects/PartsMain.js'
import PartsOpen from '../pageobjects/PartsMain.js'
import PartsDropdown from '../pageobjects/PartsMain.js'


class PartsSub extends Page {
    get PartsButton () {
        return $('//a[@class="site-nav__link site-nav__link--underline"]')
    }
    async PartsSub () {
    await Parts.Parts();
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

    async Advan () {
        await this.PartsButton.click();
        const Advan = await $('//a[@class="m-link" and contains(text(), "ADVAN")]');
        await Advan.moveTo();
        const RG4 = await $('//a[@class="m-link" and contains(text(), "RG4")]');
        await RG4.waitForExist({ timeout: 5000});
        await RG4.waitForDisplayed({ timeout: 5000 });
        expect(RG4).toBeDisplayed();
        await RG4.moveTo();
        await RG4.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/rg4',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to RG4',
            });
    }

    async ACT () {
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await this.PartsButton.click();
        const ACT = await $('//a[@class="m-link" and contains(text(), "ACT")]');
        await ACT.moveTo();
        const AcuraHonda = await $('//a[@class="m-link" and contains(text(), "Acura/Honda")]');
        await AcuraHonda.waitForExist({ timeout: 5000});
        await AcuraHonda.waitForDisplayed({ timeout: 5000 });
        expect(AcuraHonda).toBeDisplayed();
        await AcuraHonda.moveTo();
        await AcuraHonda.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/acura-honda-2',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Acura/Honda',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        await AcuraHonda.moveTo();
        const Civic = await $('//a[@href="/collections/civic-2" and contains(text(), "Civic") and contains(@class, "m-link")]');
        await Civic.waitForExist({ timeout: 5000});
        await Civic.waitForDisplayed({ timeout: 5000 });
        expect(Civic).toBeDisplayed();
        await Civic.moveTo();
        await Civic.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/civic-2',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Civic',
            });
    
        await this.PartsButton.click();
        await ACT.moveTo();
        await AcuraHonda.moveTo();
        const Integra = await $('//a[@href="/collections/integra-1" and contains(text(), "Integra") and contains(@class, "m-link")]');
        await Integra.waitForExist({ timeout: 5000});
        await Integra.waitForDisplayed({ timeout: 5000 });
        expect(Integra).toBeDisplayed();
        await Integra.moveTo();
        await Integra.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/integra-1',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Integra',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        await AcuraHonda.moveTo();
        const S2000 = await $('//a[@href="/collections/s2000-3" and contains(text(), "S2000") and contains(@class, "m-link")]');
        await S2000.waitForExist({ timeout: 5000});
        await S2000.waitForDisplayed({ timeout: 5000 });
        expect(S2000).toBeDisplayed();
        await S2000.moveTo();
        await S2000.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/s2000-3',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to S2000',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        await AcuraHonda.moveTo();
        const RSX = await $('//a[@href="/collections/rsx-1" and contains(text(), "RSX") and contains(@class, "m-link")]');
        await RSX.waitForExist({ timeout: 5000});
        await RSX.waitForDisplayed({ timeout: 5000 });
        expect(RSX).toBeDisplayed();
        await RSX.moveTo();
        await RSX.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/rsx-1',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to RSX',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        const BMW = await $('//a[@href="/collections/bmw-2" and contains(text(), "BMW") and contains(@class, "m-link")]');
        await BMW.waitForExist({ timeout: 5000});
        await BMW.waitForDisplayed({ timeout: 5000 });
        expect(BMW).toBeDisplayed();
        await BMW.moveTo();
        await BMW.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/bmw-2',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to BMW',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        await BMW.moveTo();
        const E36 = await $('//a[@href="/collections/e36-2" and contains(text(), "E36") and contains(@class, "m-link")]');
        await E36.waitForExist({ timeout: 5000});
        await E36.waitForDisplayed({ timeout: 5000 });
        expect(E36).toBeDisplayed();
        await E36.moveTo();
        await E36.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/e36-2',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to E36',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        await BMW.moveTo();
        const M3 = await $('//a[@href="/collections/m3-1" and contains(text(), "M3") and contains(@class, "m-link")]');
        await M3.waitForExist({ timeout: 5000});
        await M3.waitForDisplayed({ timeout: 5000 });
        expect(M3).toBeDisplayed();
        await M3.moveTo();
        await M3.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/m3-1',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to M3',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        const Mazda = await $('//a[@href="/collections/mazda-1" and contains(text(), "Mazda") and contains(@class, "m-link")]');
        await Mazda.waitForExist({ timeout: 5000});
        await Mazda.waitForDisplayed({ timeout: 5000 });
        expect(Mazda).toBeDisplayed();
        await Mazda.moveTo();
        await Mazda.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/mazda-1',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Mazda',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        await Mazda.moveTo();
        const Miata = await $('//a[@href="/collections/miata-3" and contains(text(), "Miata") and contains(@class, "m-link")]');
        await Miata.waitForExist({ timeout: 5000});
        await Miata.waitForDisplayed({ timeout: 5000 });
        expect(Miata).toBeDisplayed();
        await Miata.moveTo();
        await Miata.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/miata-3',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Miata',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        await Mazda.moveTo();
        const RX7 = await $('//a[@href="/collections/rx7-1" and contains(text(), "RX7") and contains(@class, "m-link")]');
        await RX7.waitForExist({ timeout: 5000});
        await RX7.waitForDisplayed({ timeout: 5000 });
        expect(RX7).toBeDisplayed();
        await RX7.moveTo();
        await RX7.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/rx7-1',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to RX7',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        await Mazda.moveTo();
        const RX8 = await $('//a[@href="/collections/rx8-2" and contains(text(), "RX8") and contains(@class, "m-link")]');
        await RX8.waitForExist({ timeout: 5000});
        await RX8.waitForDisplayed({ timeout: 5000 });
        expect(RX8).toBeDisplayed();
        await RX8.moveTo();
        await RX8.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/rx8-2',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to RX8',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        const Nissan = await $('//a[@href="/collections/nissan-4" and contains(text(), "Nissan") and contains(@class, "m-link")]');
        await Nissan.waitForExist({ timeout: 5000});
        await Nissan.waitForDisplayed({ timeout: 5000 });
        expect(Nissan).toBeDisplayed();
        await Nissan.moveTo();
        await Nissan.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 1000); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nissan-4',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Nissan',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        await delay(50);
        await Nissan.moveTo();
        const TwoFortySX = await $('//a[@href="/collections/240sx-2" and contains(text(), "240SX") and contains(@class, "m-link")]');
        await TwoFortySX.waitForExist({ timeout: 5000});
        await TwoFortySX.waitForDisplayed({ timeout: 5000 });
        expect(TwoFortySX).toBeDisplayed();
        await TwoFortySX.moveTo();
        await TwoFortySX.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 1600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/240sx-2',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to 240SX',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        await delay(50);
        await Nissan.moveTo();
        const ThreeHundredZX = await $('//a[@href="/collections/300zx-2" and contains(text(), "300ZX") and contains(@class, "m-link")]');
        await ThreeHundredZX.waitForExist({ timeout: 5000});
        await ThreeHundredZX.waitForDisplayed({ timeout: 5000 });
        expect(ThreeHundredZX).toBeDisplayed();
        await ThreeHundredZX.moveTo();
        await ThreeHundredZX.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/300zx-2',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to 300ZX',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        await delay(50);
        await Nissan.moveTo();
        const ThreeFiftyZ = await $('//a[@href="/collections/350z-2" and contains(text(), "350Z") and contains(@class, "m-link")]');
        await ThreeFiftyZ.waitForExist({ timeout: 5000});
        await ThreeFiftyZ.waitForDisplayed({ timeout: 5000 });
        expect(ThreeFiftyZ).toBeDisplayed();
        await ThreeFiftyZ.moveTo();
        await ThreeFiftyZ.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/350z-2',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to 350Z',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        const Subaru = await $('//a[@href="/collections/subaru-3" and contains(text(), "Subaru") and contains(@class, "m-link")]');
        await Subaru.waitForExist({ timeout: 5000});
        await Subaru.waitForDisplayed({ timeout: 5000 });
        expect(Subaru).toBeDisplayed();
        await Subaru.moveTo();
        await Subaru.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/subaru-3',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Subaru',
            });

        await this.PartsButton.click();
        await ACT.moveTo();
        await delay(50);
        await Subaru.moveTo();
        const BRZ = await $('//a[@href="/collections/brz-2" and contains(text(), "BRZ") and contains(@class, "m-link")]');
        await BRZ.waitForExist({ timeout: 5000});
        await BRZ.waitForDisplayed({ timeout: 5000 });
        expect(BRZ).toBeDisplayed();
        await BRZ.moveTo();
        await BRZ.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/brz-2',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to BRZ',
            });
    }

    async ARP () {
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await this.PartsButton.click();
        const ARP = await $('//a[@class="m-link" and contains(text(), "ARP")]');
        await ARP.moveTo();
        const HeadStudKits = await $('//a[@class="m-link" and contains(text(), "Head Stud Kits")]');
        await HeadStudKits.waitForExist({ timeout: 5000});
        await HeadStudKits.waitForDisplayed({ timeout: 5000 });
        expect(HeadStudKits).toBeDisplayed();
        await HeadStudKits.moveTo();
        await HeadStudKits.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/head-stud-kits',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Head Stud Kit',
            });

        await this.PartsButton.click();
        await ARP.moveTo();
        await delay(50);
        await HeadStudKits.moveTo();
        const AcuraHonda = await $('//a[@href="/collections/acura-1" and contains(text(), "Acura/Honda") and contains(@class, "m-link")]');
        await AcuraHonda.waitForExist({ timeout: 5000});
        await AcuraHonda.waitForDisplayed({ timeout: 5000 });
        expect(AcuraHonda).toBeDisplayed();
        await AcuraHonda.moveTo();
        await AcuraHonda.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/acura-1',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Acura-1',
            });

        await this.PartsButton.click();
        await ARP.moveTo();
        await delay(50);
        await HeadStudKits.moveTo();
        const BMW = await $('//a[@href="/collections/bmw-1" and contains(text(), "BMW") and contains(@class, "m-link")]');
        await BMW.waitForExist({ timeout: 5000});
        await BMW.waitForDisplayed({ timeout: 5000 });
        expect(BMW).toBeDisplayed();
        await BMW.moveTo();
        await BMW.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/bmw-1',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to BMW-1',
            });

        await this.PartsButton.click();
        await ARP.moveTo();
        await delay(50);
        await HeadStudKits.moveTo();
        const Chevrolet = await $('//a[@href="/collections/chevrolet" and contains(text(), "Chevrolet") and contains(@class, "m-link")]');
        await Chevrolet.waitForExist({ timeout: 5000});
        await Chevrolet.waitForDisplayed({ timeout: 5000 });
        expect(Chevrolet).toBeDisplayed();
        await Chevrolet.moveTo();
        await Chevrolet.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/chevrolet',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Chevrolet',
            });

        await this.PartsButton.click();
        await ARP.moveTo();
        await delay(50);
        await HeadStudKits.moveTo();
        const Ford = await $('//a[@href="/collections/ford-1" and contains(text(), "Ford") and contains(@class, "m-link")]');
        await Ford.waitForExist({ timeout: 5000});
        await Ford.waitForDisplayed({ timeout: 5000 });
        expect(Ford).toBeDisplayed();
        await Ford.moveTo();
        await Ford.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/ford-1',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Ford-1',
            });

        await this.PartsButton.click();
        await ARP.moveTo();
        await delay(50);
        await HeadStudKits.moveTo();
        const Hyundai = await $('//a[@href="/collections/hyundai-1" and contains(text(), "Hyundai") and contains(@class, "m-link")]');
        await Hyundai.waitForExist({ timeout: 5000});
        await Hyundai.waitForDisplayed({ timeout: 5000 });
        expect(Hyundai).toBeDisplayed();
        await Hyundai.moveTo();
        await Hyundai.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/hyundai-1',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Hyundai-1',
            });

        await this.PartsButton.click();
        await ARP.moveTo();
        await delay(50);
        await HeadStudKits.moveTo();
        const Mazda = await $('//a[@href="/collections/mazda" and contains(text(), "Mazda") and contains(@class, "m-link")]');
        await Mazda.waitForExist({ timeout: 5000});
        await Mazda.waitForDisplayed({ timeout: 5000 });
        expect(Mazda).toBeDisplayed();
        await Mazda.moveTo();
        await Mazda.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/mazda',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Mazda',
            });

        await this.PartsButton.click();
        await ARP.moveTo();
        await delay(50);
        await HeadStudKits.moveTo();
        const MINI = await $('//a[@href="/collections/mini-2" and contains(text(), "MINI") and contains(@class, "m-link")]');
        await MINI.waitForExist({ timeout: 5000});
        await MINI.waitForDisplayed({ timeout: 5000 });
        expect(MINI).toBeDisplayed();
        await MINI.moveTo();
        await MINI.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/mini-2',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to MINI',
            });

        await this.PartsButton.click();
        await ARP.moveTo();
        await delay(50);
        await HeadStudKits.moveTo();
        const Mitsubishi = await $('//a[@href="/collections/mitsubishi-1" and contains(text(), "Mitsubishi") and contains(@class, "m-link")]');
        await Mitsubishi.waitForExist({ timeout: 5000});
        await Mitsubishi.waitForDisplayed({ timeout: 5000 });
        expect(Mitsubishi).toBeDisplayed();
        await Mitsubishi.moveTo();
        await Mitsubishi.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/mitsubishi-1',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Mitsubishi',
            });

        await this.PartsButton.click();
        await ARP.moveTo();
        await delay(50);
        await HeadStudKits.moveTo();
        const Nissan = await $('//a[@href="/collections/nissan-1" and contains(text(), "Nissan") and contains(@class, "m-link")]');
        await Nissan.waitForExist({ timeout: 5000});
        await Nissan.waitForDisplayed({ timeout: 5000 });
        expect(Nissan).toBeDisplayed();
        await Nissan.moveTo();
        await Nissan.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nissan-1',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Nissan',
            });

        await this.PartsButton.click();
        await ARP.moveTo();
        await delay(50);
        await HeadStudKits.moveTo();
        const Subaru = await $('//a[@href="/collections/subaru-1" and contains(text(), "Subaru") and contains(@class, "m-link")]');
        await Subaru.waitForExist({ timeout: 5000});
        await Subaru.waitForDisplayed({ timeout: 5000 });
        expect(Subaru).toBeDisplayed();
        await Subaru.moveTo();
        await Subaru.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/subaru-1',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Subaru',
            });

        await this.PartsButton.click();
        await ARP.moveTo();
        await delay(50);
        await HeadStudKits.moveTo();
        const Toyota = await $('//a[@href="/collections/toyota-1" and contains(text(), "Toyota") and contains(@class, "m-link")]');
        await Toyota.waitForExist({ timeout: 5000});
        await Toyota.waitForDisplayed({ timeout: 5000 });
        expect(Toyota).toBeDisplayed();
        await Toyota.moveTo();
        await Toyota.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/toyota-1',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Toyota',
            });
    
        await this.PartsButton.click();
        await ARP.moveTo();
        await delay(50);
        const FlyWheelBoltKits = await $('//a[@href="/collections/flywheel-bolt-kits" and contains(text(), "Flywheel Bolt Kits") and contains(@class, "m-link")]');
        await FlyWheelBoltKits.waitForExist({ timeout: 5000});
        await FlyWheelBoltKits.waitForDisplayed({ timeout: 5000 });
        expect(FlyWheelBoltKits).toBeDisplayed();
        await FlyWheelBoltKits.moveTo();
        await FlyWheelBoltKits.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/flywheel-bolt-kits',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Fly Wheel Bolt Kits',
            });

        await this.PartsButton.click();
        await ARP.moveTo();
        await delay(50);
        await FlyWheelBoltKits.moveTo();
        const AcuraHondaARP = await $('//a[@href="/collections/acura-honda" and contains(text(), "Acura / Honda") and contains(@class, "m-link")]');
        await AcuraHondaARP.waitForExist({ timeout: 5000});
        await AcuraHondaARP.waitForDisplayed({ timeout: 5000 });
        expect(AcuraHondaARP).toBeDisplayed();
        await AcuraHondaARP.moveTo();
        await AcuraHondaARP.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/acura-honda',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Acura/Honda',
            });
    }

    async ChaseBays () {
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await this.PartsButton.click();
        const ChaseBays = await $('//a[@class="m-link" and contains(text(), "Chase Bays")]');
        await ChaseBays.moveTo();
        const UniversalChaseBays = await $('//a[@class="m-link" and contains(text(), "Universal Chase Bays")]');
        await UniversalChaseBays.waitForExist({ timeout: 5000});
        await UniversalChaseBays.waitForDisplayed({ timeout: 5000 });
        expect(UniversalChaseBays).toBeDisplayed();
        await UniversalChaseBays.moveTo();
        await UniversalChaseBays.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/universal-chase-bays',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Universal Chase Bays',
            });
    }

    async Deatschwerks () {
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await this.PartsButton.click();
        const Deatschwerks = await $('//a[@class="m-link" and contains(text(), "Deatschwerks")]');
        await Deatschwerks.moveTo();
        const ThreeFiftyZandThreeSeventyZ = await $('//a[@href="/collections/350z-370z" and contains(text(), "350Z / 370Z") and contains(@class, "m-link")]');
        await ThreeFiftyZandThreeSeventyZ.waitForExist({ timeout: 5000});
        await ThreeFiftyZandThreeSeventyZ.waitForDisplayed({ timeout: 5000 });
        expect(ThreeFiftyZandThreeSeventyZ).toBeDisplayed();
        await ThreeFiftyZandThreeSeventyZ.moveTo();
        await ThreeFiftyZandThreeSeventyZ.click(); 
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/350z-370z',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to 350Z / 370Z',
            });

        await this.PartsButton.click();
        await Deatschwerks.moveTo();
        await delay(50);
        await ThreeFiftyZandThreeSeventyZ.moveTo();
        const FuelInjectorsZ = await $('//a[@href="/collections/fuel-injectors-1" and contains(text(), "Fuel Injectors") and contains(@class, "m-link")]');
        await FuelInjectorsZ.moveTo();
        await FuelInjectorsZ.waitForExist({ timeout: 5000});
        await FuelInjectorsZ.waitForDisplayed({ timeout: 5000 });
        expect(FuelInjectorsZ).toBeDisplayed();
        await FuelInjectorsZ.moveTo();
        await FuelInjectorsZ.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/fuel-injectors-1',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Fuel Injectors Z',
            });

        await this.PartsButton.click();
        await Deatschwerks.moveTo();
        await delay(50);
        await ThreeFiftyZandThreeSeventyZ.moveTo();
        const FuelPumpsZ = await $('//a[@href="/collections/fuel-pumps-21" and contains(text(), "Fuel Pumps") and contains(@class, "m-link")]');
        await FuelPumpsZ.moveTo();
        await FuelPumpsZ.waitForExist({ timeout: 5000});
        await FuelPumpsZ.waitForDisplayed({ timeout: 5000 });
        expect(FuelPumpsZ).toBeDisplayed();
        await FuelPumpsZ.moveTo();
        await FuelPumpsZ.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/fuel-pumps-21',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Fuel Pumps Z',
            });

        await this.PartsButton.click();
        await Deatschwerks.moveTo();
        await delay(50);
        const Schassis = await $('//a[@class="m-link" and contains(text(), "S13 / S14 / S15")]');
        await Schassis.moveTo();
        await Schassis.waitForExist({ timeout: 5000});
        await Schassis.waitForDisplayed({ timeout: 5000 });
        expect(Schassis).toBeDisplayed();
        await Schassis.moveTo();
        await Schassis.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/s13-s14-s15',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to S13 / S14 / S15',
            });

        await this.PartsButton.click();
        await Deatschwerks.moveTo();
        await delay(50);
        await Schassis.moveTo();
        const SchassisInjector = await $('//a[@href="/collections/fuel-injectors" and contains(text(), "Fuel Injectors") and contains(@class, "m-link")]');
        await SchassisInjector.waitForExist({ timeout: 5000});
        await SchassisInjector.waitForDisplayed({ timeout: 5000 });
        expect(SchassisInjector).toBeDisplayed();
        await SchassisInjector.moveTo();
        await SchassisInjector.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/fuel-injectors',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to S13 / S14 / S15 Fuel Injectors',
            });

        await this.PartsButton.click();
        await Deatschwerks.moveTo();
        await delay(50);
        await Schassis.moveTo();
        const SchassisPump = await $('//a[@href="/collections/fuel-pumps-20" and contains(text(), "Fuel Pumps") and contains(@class, "m-link")]');
        await SchassisPump.waitForExist({ timeout: 5000});
        await SchassisPump.waitForDisplayed({ timeout: 5000 });
        expect(SchassisPump).toBeDisplayed();
        await SchassisPump.moveTo();
        await SchassisPump.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/fuel-pumps-20',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to S13 / S14 / S15 Fuel Pumps',
            });

        await this.PartsButton.click();
        await Deatschwerks.moveTo();
        await delay(50);
        const S2000 = await $('//a[@href="/collections/s2000-2" and contains(text(), "S2000") and contains(@class, "m-link")]');
        await S2000.moveTo();
        await S2000.waitForExist({ timeout: 5000});
        await S2000.waitForDisplayed({ timeout: 5000 });
        expect(S2000).toBeDisplayed();
        await S2000.moveTo();
        await S2000.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/s2000-2',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to S2000',
            });

        await this.PartsButton.click();
        await Deatschwerks.moveTo();
        await delay(50);
        await S2000.moveTo();
        const S2000Injectors = await $('//a[@href="/collections/fuel-injectors-3" and contains(text(), "Fuel Injectors") and contains(@class, "m-link")]');
        await S2000Injectors.moveTo();
        await S2000Injectors.waitForExist({ timeout: 5000});
        await S2000Injectors.waitForDisplayed({ timeout: 5000 });
        expect(S2000Injectors).toBeDisplayed();
        await S2000Injectors.moveTo();
        await S2000Injectors.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/fuel-injectors-3',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to S2000 Fuel Injectors',
            });

        await this.PartsButton.click();
        await Deatschwerks.moveTo();
        await delay(50);
        await S2000.moveTo();
        const S2000Pumps = await $('//a[@href="/collections/fuel-pumps-23" and contains(text(), "Fuel Pumps") and contains(@class, "m-link")]');
        await S2000Pumps.waitForExist({ timeout: 5000});
        await S2000Pumps.waitForDisplayed({ timeout: 5000 });
        expect(S2000Pumps).toBeDisplayed();
        await S2000Pumps.moveTo();
        await S2000Pumps.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/fuel-pumps-23',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to S2000 Fuel Pumps',
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

        const CivicPumps = await $('//a[@class="m-link" and contains(text(), "Fuel Pumps")]');
        await CivicPumps.waitForExist({ timeout: 5000});
        await CivicPumps.waitForDisplayed({ timeout: 5000 });
        expect(CivicPumps).toBeDisplayed();
        await CivicPumps.moveTo();
    
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

        const MiataInjectors = await $('//a[@class="m-link" and contains(text(), "Fuel Injectors")]');
        await MiataInjectors.waitForExist({ timeout: 5000});
        await MiataInjectors.waitForDisplayed({ timeout: 5000 });
        expect(MiataInjectors).toBeDisplayed();
        await MiataInjectors.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const MiataPump = await $('//a[@class="m-link" and contains(text(), "Fuel Pumps")]');
            await MiataPump.waitForExist({ timeout: 5000});
            await MiataPump.waitForDisplayed({ timeout: 5000 });
            expect(MiataPump).toBeDisplayed();
            await MiataPump.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async Enkei () {
        await Enkei.moveTo();
        const PF01 = await $('//a[@class="m-link" and contains(text(), "PF01")]');
        await PF01.waitForExist({ timeout: 5000});
        await PF01.waitForDisplayed({ timeout: 5000 });
        expect(PF01).toBeDisplayed();
        await PF01.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PF0117 = await $('//a[@class="m-link" and contains(text(), "17 Inch")]');
        await PF0117.waitForExist({ timeout: 5000});
        await PF0117.waitForDisplayed({ timeout: 5000 });
        expect(PF0117).toBeDisplayed();
        await PF0117.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PF0118 = await $('//a[@class="m-link" and contains(text(), "18 Inch")]');
        await PF0118.waitForExist({ timeout: 5000});
        await PF0118.waitForDisplayed({ timeout: 5000 });
        expect(PF0118).toBeDisplayed();
        await PF0118.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PF05 = await $('//a[@class="m-link" and contains(text(), "PF05")]');
        await PF05.waitForExist({ timeout: 5000});
        await PF05.waitForDisplayed({ timeout: 5000 });
        expect(PF05).toBeDisplayed();
        await PF05.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PF0518 = await $('//a[@class="m-link" and contains(text(), "18 inch")]');
        await PF0518.waitForExist({ timeout: 5000});
        await PF0518.waitForDisplayed({ timeout: 5000 });
        expect(PF0518).toBeDisplayed();
        await PF0518.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PF09 = await $('//a[@class="m-link" and contains(text(), "PF09")]');
        await PF09.waitForExist({ timeout: 5000});
        await PF09.waitForDisplayed({ timeout: 5000 });
        expect(PF09).toBeDisplayed();
        await PF09.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PF0918 = await $('//a[@class="m-link" and contains(text(), "18 Inch")]');
        await PF0918.waitForExist({ timeout: 5000});
        await PF0918.waitForDisplayed({ timeout: 5000 });
        expect(PF0918).toBeDisplayed();
        await PF0918.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RPF1 = await $('//a[@class="m-link" and contains(text(), "RPF1")]');
        await RPF1.waitForExist({ timeout: 5000});
        await RPF1.waitForDisplayed({ timeout: 5000 });
        expect(RPF1).toBeDisplayed();
        await RPF1.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RPF115 = await $('//a[@class="m-link" and contains(text(), "15 Inch")]');
        await RPF115.waitForExist({ timeout: 5000});
        await RPF115.waitForDisplayed({ timeout: 5000 });
        expect(RPF115).toBeDisplayed();
        await RPF115.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RPF116 = await $('//a[@class="m-link" and contains(text(), "16 Inch")]');
        await RPF116.waitForExist({ timeout: 5000});
        await RPF116.waitForDisplayed({ timeout: 5000 });
        expect(RPF116).toBeDisplayed();
        await RPF116.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RPF117 = await $('//a[@class="m-link" and contains(text(), "17 Inch")]');
        await RPF117.waitForExist({ timeout: 5000});
        await RPF117.waitForDisplayed({ timeout: 5000 });
        expect(RPF117).toBeDisplayed();
        await RPF117.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RPF118 = await $('//a[@class="m-link" and contains(text(), "18 Inch")]');
        await RPF118.waitForExist({ timeout: 5000});
        await RPF118.waitForDisplayed({ timeout: 5000 });
        expect(RPF118).toBeDisplayed();
        await RPF118.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RPT1 = await $('//a[@class="m-link" and contains(text(), "RPT1")]');
        await RPT1.waitForExist({ timeout: 5000});
        await RPT1.waitForDisplayed({ timeout: 5000 });
        expect(RPT1).toBeDisplayed();
        await RPT1.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RPT116 = await $('//a[@class="m-link" and contains(text(), "16 Inch")]');
        await RPT116.waitForExist({ timeout: 5000});
        await RPT116.waitForDisplayed({ timeout: 5000 });
        expect(RPT116).toBeDisplayed();
        await RPT116.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RPT117 = await $('//a[@class="m-link" and contains(text(), "17 Inch")]');
        await RPT117.waitForExist({ timeout: 5000});
        await RPT117.waitForDisplayed({ timeout: 5000 });
        expect(RPT117).toBeDisplayed();
        await RPT117.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async Fifteen52 () {
        await Fifteen52.moveTo();
        const CenterCaps = await $('//a[@class="m-link" and contains(text(), "Center Caps")]');
        await CenterCaps.waitForExist({ timeout: 5000});
        await CenterCaps.waitForDisplayed({ timeout: 5000 });
        expect(CenterCaps).toBeDisplayed();
        await CenterCaps.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Analog = await $('//a[@class="m-link" and contains(text(), "Analog")]');
        await Analog.waitForExist({ timeout: 5000});
        await Analog.waitForDisplayed({ timeout: 5000 });
        expect(Analog).toBeDisplayed();
        await Analog.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Integrale = await $('//a[@class="m-link" and contains(text(), "Integrale")]');
        await Integrale.waitForExist({ timeout: 5000});
        await Integrale.waitForDisplayed({ timeout: 5000 });
        expect(Integrale).toBeDisplayed();
        await Integrale.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Tarmac = await $('//a[@class="m-link" and contains(text(), "Tarmac")]');
        await Tarmac.waitForExist({ timeout: 5000});
        await Tarmac.waitForDisplayed({ timeout: 5000 });
        expect(Tarmac).toBeDisplayed();
        await Tarmac.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Turbomac = await $('//a[@class="m-link" and contains(text(), "Turbomac")]');
        await Turbomac.waitForExist({ timeout: 5000});
        await Turbomac.waitForDisplayed({ timeout: 5000 });
        expect(Turbomac).toBeDisplayed();
        await Turbomac.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async FunkMotorsport () {
        await FunkMotorsport.moveTo();
        const UniversalTurboBlankets = await $('//a[@class="m-link" and contains(text(), "Universal Turbo Blankets")]');
        await UniversalTurboBlankets.waitForExist({ timeout: 5000});
        await UniversalTurboBlankets.waitForDisplayed({ timeout: 5000 });
        expect(UniversalTurboBlankets).toBeDisplayed();
        await UniversalTurboBlankets.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const GarrettTurboBlankets = await $('//a[@class="m-link" and contains(text(), "Garrett Turbo Blankets")]');
        await GarrettTurboBlankets.waitForExist({ timeout: 5000});
        await GarrettTurboBlankets.waitForDisplayed({ timeout: 5000 });
        expect(GarrettTurboBlankets).toBeDisplayed();
        await GarrettTurboBlankets.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Gseries = await $('//a[@class="m-link" and contains(text(), "G Series")]');
        await Gseries.waitForExist({ timeout: 5000});
        await Gseries.waitForDisplayed({ timeout: 5000 });
        expect(Gseries).toBeDisplayed();
        await Gseries.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const GTseries = await $('//a[@class="m-link" and contains(text(), "GT Series")]');
        await GTseries.waitForExist({ timeout: 5000});
        await GTseries.waitForDisplayed({ timeout: 5000 });
        expect(GTseries).toBeDisplayed();
        await GTseries.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const GTXseries = await $('//a[@class="m-link" and contains(text(), "GTX Series")]');
        await GTXseries.waitForExist({ timeout: 5000});
        await GTXseries.waitForDisplayed({ timeout: 5000 });
        expect(GTXseries).toBeDisplayed();
        await GTXseries.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const ExhaustProtection = await $('//a[@class="m-link" and contains(text(), "Exhaust Protection")]');
        await ExhaustProtection.waitForExist({ timeout: 5000});
        await ExhaustProtection.waitForDisplayed({ timeout: 5000 });
        expect(ExhaustProtection).toBeDisplayed();
        await ExhaustProtection.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const LineandHoseProtection = await $('//a[@class="m-link" and contains(text(), "Line & Hose Protection")]');
        await LineandHoseProtection.waitForExist({ timeout: 5000});
        await LineandHoseProtection.waitForDisplayed({ timeout: 5000 });
        expect(LineandHoseProtection).toBeDisplayed();
        await LineandHoseProtection.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const ReflectiveTape = await $('//a[@class="m-link" and contains(text(), "Reflective Tape and Induction Sleeving")]');
        await ReflectiveTape.waitForExist({ timeout: 5000});
        await ReflectiveTape.waitForDisplayed({ timeout: 5000 });
        expect(ReflectiveTape).toBeDisplayed();
        await ReflectiveTape.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async Garrett () {
        await Garrett.moveTo();
        const GarrettTurboAccessories = await $('//a[@class="m-link" and contains(text(), "Garrett Turbo Accessories")]');
        await GarrettTurboAccessories.waitForExist({ timeout: 5000});
        await GarrettTurboAccessories.waitForDisplayed({ timeout: 5000 });
        expect(GarrettTurboAccessories).toBeDisplayed();
        await GarrettTurboAccessories.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const GTXsuperCores = await $('//a[@class="m-link" and contains(text(), "GTX Super Cores")]');
        await GTXsuperCores.waitForExist({ timeout: 5000});
        await GTXsuperCores.waitForDisplayed({ timeout: 5000 });
        expect(GTXsuperCores).toBeDisplayed();
        await GTXsuperCores.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const GTX28 = await $('//a[@class="m-link" and contains(text(), "GTX Super Cores")]');
        await GTX28.waitForExist({ timeout: 5000});
        await GTX28.waitForDisplayed({ timeout: 5000 });
        expect(GTX28).toBeDisplayed();
        await GTX28.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const GseriesHousings = await $('//a[@class="m-link" and contains(text(), "G Series Housings")]');
        await GseriesHousings.waitForExist({ timeout: 5000});
        await GseriesHousings.waitForDisplayed({ timeout: 5000 });
        expect(GseriesHousings).toBeDisplayed();
        await GseriesHousings.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const GseriesSuperCores = await $('//a[@class="m-link" and contains(text(), "G Series Super Cores")]');
        await GseriesSuperCores.waitForExist({ timeout: 5000});
        await GseriesSuperCores.waitForDisplayed({ timeout: 5000 });
        expect(GseriesSuperCores).toBeDisplayed();
        await GseriesSuperCores.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const G25SuperCores = await $('//a[@class="m-link" and contains(text(), "G25 Super Cores")]');
        await G25SuperCores.waitForExist({ timeout: 5000});
        await G25SuperCores.waitForDisplayed({ timeout: 5000 });
        expect(G25SuperCores).toBeDisplayed();
        await G25SuperCores.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const GseriesTurbineHousings = await $('//a[@class="m-link" and contains(text(), "G Series Turbine Housings")]');
        await GseriesTurbineHousings.waitForExist({ timeout: 5000});
        await GseriesTurbineHousings.waitForDisplayed({ timeout: 5000 });
        expect(GseriesTurbineHousings).toBeDisplayed();
        await GseriesTurbineHousings.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const G25TurbineHousings = await $('//a[@class="m-link" and contains(text(), "G25 Turbine Housings")]');
        await G25TurbineHousings.waitForExist({ timeout: 5000});
        await G25TurbineHousings.waitForDisplayed({ timeout: 5000 });
        expect(G25TurbineHousings).toBeDisplayed();
        await G25TurbineHousings.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async GramLights () {
        await GramLights.moveTo();
        const FiftySevenDR = await $('//a[@class="m-link" and contains(text(), "57DR")]');
        await FiftySevenDR.waitForExist({ timeout: 5000});
        await FiftySevenDR.waitForDisplayed({ timeout: 5000 });
        expect(FiftySevenDR).toBeDisplayed();
        await FiftySevenDR.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Inch15 = await $('//a[@class="m-link" and contains(text(), "15 Inch")]');
        await Inch15.waitForExist({ timeout: 5000});
        await Inch15.waitForDisplayed({ timeout: 5000 });
        expect(Inch15).toBeDisplayed();
        await Inch15.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Inch17 = await $('//a[@class="m-link" and contains(text(), "17 Inch")]');
        await Inch17.waitForExist({ timeout: 5000});
        await Inch17.waitForDisplayed({ timeout: 5000 });
        expect(Inch17).toBeDisplayed();
        await Inch17.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Inch18 = await $('//a[@class="m-link" and contains(text(), "18 Inch")]');
        await Inch18.waitForExist({ timeout: 5000});
        await Inch18.waitForDisplayed({ timeout: 5000 });
        expect(Inch18).toBeDisplayed();
        await Inch18.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Inch19 = await $('//a[@class="m-link" and contains(text(), "19 Inch")]');
        await Inch19.waitForExist({ timeout: 5000});
        await Inch19.waitForDisplayed({ timeout: 5000 });
        expect(Inch19).toBeDisplayed();
        await Inch19.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const FiftySevenCR = await $('//a[@class="m-link" and contains(text(), "57CR")]');
        await FiftySevenCR.waitForExist({ timeout: 5000});
        await FiftySevenCR.waitForDisplayed({ timeout: 5000 });
        expect(FiftySevenCR).toBeDisplayed();
        await FiftySevenCR.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const EighteenInch = await $('//a[@class="m-link" and contains(text(), "18 INCH")]');
        await EighteenInch.waitForExist({ timeout: 5000});
        await EighteenInch.waitForDisplayed({ timeout: 5000 });
        expect(EighteenInch).toBeDisplayed();
        await EighteenInch.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const NineteenInch = await $('//a[@class="m-link" and contains(text(), "19 INCH")]');
        await NineteenInch.waitForExist({ timeout: 5000});
        await NineteenInch.waitForDisplayed({ timeout: 5000 });
        expect(NineteenInch).toBeDisplayed();
        await NineteenInch.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const CenterCaps = await $('//a[@class="m-link" and contains(text(), "Center Caps")]');
        await CenterCaps.waitForExist({ timeout: 5000});
        await CenterCaps.waitForDisplayed({ timeout: 5000 });
        expect(CenterCaps).toBeDisplayed();
        await CenterCaps.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const WheelStickers = await $('//a[@class="m-link" and contains(text(), "Wheel Stickers")]');
        await WheelStickers.waitForExist({ timeout: 5000});
        await WheelStickers.waitForDisplayed({ timeout: 5000 });
        expect(WheelStickers).toBeDisplayed();
        await WheelStickers.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async Greddy () {
        await Greddy.moveTo();
        const AirFilters = await $('//a[@class="m-link" and contains(text(), "Air Filters")]');
        await AirFilters.waitForExist({ timeout: 5000});
        await AirFilters.waitForDisplayed({ timeout: 5000 });
        expect(AirFilters).toBeDisplayed();
        await AirFilters.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Exhaust = await $('//a[@class="m-link" and contains(text(), "Exhaust")]');
        await Exhaust.waitForExist({ timeout: 5000});
        await Exhaust.waitForDisplayed({ timeout: 5000 });
        expect(Exhaust).toBeDisplayed();
        await Exhaust.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const EvolutionGT = await $('//a[@class="m-link" and contains(text(), "EvolutionGT")]');
        await EvolutionGT.waitForExist({ timeout: 5000});
        await EvolutionGT.waitForDisplayed({ timeout: 5000 });
        expect(EvolutionGT).toBeDisplayed();
        await EvolutionGT.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const EvolutionRS = await $('//a[@class="m-link" and contains(text(), "EvolutionRS")]');
        await EvolutionRS.waitForExist({ timeout: 5000});
        await EvolutionRS.waitForDisplayed({ timeout: 5000 });
        expect(EvolutionRS).toBeDisplayed();
        await EvolutionRS.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const IntercoolerKits = await $('//a[@class="m-link" and contains(text(), "Intercooler Kits")]');
        await IntercoolerKits.waitForExist({ timeout: 5000});
        await IntercoolerKits.waitForDisplayed({ timeout: 5000 });
        expect(IntercoolerKits).toBeDisplayed();
        await IntercoolerKits.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const VehicleSpecificIntercoolerKits = await $('//a[@class="m-link" and contains(text(), "Vehicle Specific Intercooler Kits")]');
        await VehicleSpecificIntercoolerKits.waitForExist({ timeout: 5000});
        await VehicleSpecificIntercoolerKits.waitForDisplayed({ timeout: 5000 });
        expect(VehicleSpecificIntercoolerKits).toBeDisplayed();
        await VehicleSpecificIntercoolerKits.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const UniversalIntercoolerKits = await $('//a[@class="m-link" and contains(text(), "Universal Intercooler Kits")]');
        await UniversalIntercoolerKits.waitForExist({ timeout: 5000});
        await UniversalIntercoolerKits.waitForDisplayed({ timeout: 5000 });
        expect(UniversalIntercoolerKits).toBeDisplayed();
        await UniversalIntercoolerKits.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        
    }

    async HKS () {
        await HKS.moveTo();        
        const HKSapparel = await $('//a[@class="m-link" and contains(text(), "HKS Apparel & Accessories")]');
        await HKSapparel.waitForExist({ timeout: 5000});
        await HKSapparel.waitForDisplayed({ timeout: 5000 });
        expect(HKSapparel).toBeDisplayed();
        await HKSapparel.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const HKSexhaust = await $('//a[@class="m-link" and contains(text(), "HKS Exhaust")]');
        await HKSexhaust.waitForExist({ timeout: 5000});
        await HKSexhaust.waitForDisplayed({ timeout: 5000 });
        expect(HKSexhaust).toBeDisplayed();
        await HKSexhaust.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const HIpower = await $('//a[@class="m-link" and contains(text(), "HI-Power")]');
        await HIpower.waitForExist({ timeout: 5000});
        await HIpower.waitForDisplayed({ timeout: 5000 });
        expect(HIpower).toBeDisplayed();
        await HIpower.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const HIpowerSilent = await $('//a[@class="m-link" and contains(text(), "HI-Power Silent")]');
        await HIpowerSilent.waitForExist({ timeout: 5000});
        await HIpowerSilent.waitForDisplayed({ timeout: 5000 });
        expect(HIpowerSilent).toBeDisplayed();
        await HIpowerSilent.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const SuperTurbo = await $('//a[@class="m-link" and contains(text(), "Super Turbo")]');
        await SuperTurbo.waitForExist({ timeout: 5000});
        await SuperTurbo.waitForDisplayed({ timeout: 5000 });
        expect(SuperTurbo).toBeDisplayed();
        await SuperTurbo.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async ISRperformance () {
        await ISRperformance.moveTo();
        const ISRexhaust = await $('//a[@class="m-link" and contains(text(), "ISR Exhaust")]');
        await ISRexhaust.waitForExist({ timeout: 5000});
        await ISRexhaust.waitForDisplayed({ timeout: 5000 });
        expect(ISRexhaust).toBeDisplayed();
        await ISRexhaust.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const CircuitExhausts = await $('//a[@class="m-link" and contains(text(), "Circuit Exhausts")]');
        await CircuitExhausts.waitForExist({ timeout: 5000});
        await CircuitExhausts.waitForDisplayed({ timeout: 5000 });
        expect(CircuitExhausts).toBeDisplayed();
        await CircuitExhausts.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const GTsingleExhaust = await $('//a[@class="m-link" and contains(text(), "GT Single Exhausts")]');
        await GTsingleExhaust.waitForExist({ timeout: 5000});
        await GTsingleExhaust.waitForDisplayed({ timeout: 5000 });
        expect(GTsingleExhaust).toBeDisplayed();
        await GTsingleExhaust.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const OMSspecExhausts = await $('//a[@class="m-link" and contains(text(), "OMS Spec Exhausts")]');
        await OMSspecExhausts.waitForExist({ timeout: 5000});
        await OMSspecExhausts.waitForDisplayed({ timeout: 5000 });
        expect(OMSspecExhausts).toBeDisplayed();
        await OMSspecExhausts.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RacingExhausts = await $('//a[@class="m-link" and contains(text(), "Racing Exhausts")]');
        await RacingExhausts.waitForExist({ timeout: 5000});
        await RacingExhausts.waitForDisplayed({ timeout: 5000 });
        expect(RacingExhausts).toBeDisplayed();
        await RacingExhausts.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Series1EPblastPipes = await $('//a[@class="m-link" and contains(text(), "Series 1 EP Blast Pipes")]');
        await Series1EPblastPipes.waitForExist({ timeout: 5000});
        await Series1EPblastPipes.waitForDisplayed({ timeout: 5000 });
        expect(Series1EPblastPipes).toBeDisplayed();
        await Series1EPblastPipes.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Series2EPblastPipes = await $('//a[@class="m-link" and contains(text(), "Series 2 EP Blast Pipes")]');
        await Series2EPblastPipes.waitForExist({ timeout: 5000});
        await Series2EPblastPipes.waitForDisplayed({ timeout: 5000 });
        expect(Series2EPblastPipes).toBeDisplayed();
        await Series2EPblastPipes.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Series2GTblastPipes = await $('//a[@class="m-link" and contains(text(), "Series 2 GT Blast Pipes")]');
        await Series2GTblastPipes.waitForExist({ timeout: 5000});
        await Series2GTblastPipes.waitForDisplayed({ timeout: 5000 });
        expect(Series2GTblastPipes).toBeDisplayed();
        await Series2GTblastPipes.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const STexhausts = await $('//a[@class="m-link" and contains(text(), "ST Exhausts")]');
        await STexhausts.waitForExist({ timeout: 5000});
        await STexhausts.waitForDisplayed({ timeout: 5000 });
        expect(STexhausts).toBeDisplayed();
        await STexhausts.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const MBSEaxelBackExhausts = await $('//a[@class="m-link" and contains(text(), "MBSE Axel Back Exhausts")]');
        await MBSEaxelBackExhausts.waitForExist({ timeout: 5000});
        await MBSEaxelBackExhausts.waitForDisplayed({ timeout: 5000 });
        expect(MBSEaxelBackExhausts).toBeDisplayed();
        await MBSEaxelBackExhausts.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const SeriesIIEPaxelBack = await $('//a[@class="m-link" and contains(text(), "Series II EP Axle Back")]');
        await SeriesIIEPaxelBack.waitForExist({ timeout: 5000});
        await SeriesIIEPaxelBack.waitForDisplayed({ timeout: 5000 });
        expect(SeriesIIEPaxelBack).toBeDisplayed();
        await SeriesIIEPaxelBack.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const ISRshiftKnobs = await $('//a[@class="m-link" and contains(text(), "ISR Shift Knobs")]');
        await ISRshiftKnobs.waitForExist({ timeout: 5000});
        await ISRshiftKnobs.waitForDisplayed({ timeout: 5000 });
        expect(ISRshiftKnobs).toBeDisplayed();
        await ISRshiftKnobs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async Kansei () {
        await Kansei.moveTo();
        const KNP = await $('//a[@class="m-link" and contains(text(), "KNP")]');
        await KNP.waitForExist({ timeout: 5000});
        await KNP.waitForDisplayed({ timeout: 5000 });
        expect(KNP).toBeDisplayed();
        await KNP.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Tandem = await $('//a[@class="m-link" and contains(text(), "Tandem")]');
        await Tandem.waitForExist({ timeout: 5000});
        await Tandem.waitForDisplayed({ timeout: 5000 });
        expect(Tandem).toBeDisplayed();
        await Tandem.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async KoyoRadiators () {
        await KoyoRadiators.moveTo();
        const Acura02 = await $('//a[@class="m-link" and contains(text(), "Acura")]');
        await Acura02.waitForExist({ timeout: 5000});
        await Acura02.waitForDisplayed({ timeout: 5000 });
        expect(Acura02).toBeDisplayed();
        await Acura02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Integra02 = await $('//a[@class="m-link" and contains(text(), "BMW")]');
        await Integra02.waitForExist({ timeout: 5000});
        await Integra02.waitForDisplayed({ timeout: 5000 });
        expect(Integra02).toBeDisplayed();
        await Integra02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const NSX = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await NSX.waitForExist({ timeout: 5000});
        await NSX.waitForDisplayed({ timeout: 5000 });
        expect(NSX).toBeDisplayed();
        await NSX.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RSX02 = await $('//a[@class="m-link" and contains(text(), "Honda")]');
        await RSX02.waitForExist({ timeout: 5000});
        await RSX02.waitForDisplayed({ timeout: 5000 });
        expect(RSX02).toBeDisplayed();
        await RSX02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const TSX = await $('//a[@class="m-link" and contains(text(), "Honda")]');
        await TSX.waitForExist({ timeout: 5000});
        await TSX.waitForDisplayed({ timeout: 5000 });
        expect(TSX).toBeDisplayed();
        await TSX.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const BMW02 = await $('//a[@class="m-link" and contains(text(), "BMW")]');
        await BMW02.waitForExist({ timeout: 5000});
        await BMW02.waitForDisplayed({ timeout: 5000 });
        expect(BMW02).toBeDisplayed();
        await BMW02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const E3602 = await $('//a[@class="m-link" and contains(text(), "E36")]');
        await E3602.waitForExist({ timeout: 5000});
        await E3602.waitForDisplayed({ timeout: 5000 });
        expect(E3602).toBeDisplayed();
        await E3602.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const E46 = await $('//a[@class="m-link" and contains(text(), "E46")]');
        await E46.waitForExist({ timeout: 5000});
        await E46.waitForDisplayed({ timeout: 5000 });
        expect(E46).toBeDisplayed();
        await E46.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const F80 = await $('//a[@class="m-link" and contains(text(), "F80/82/83")]');
        await F80.waitForExist({ timeout: 5000});
        await F80.waitForDisplayed({ timeout: 5000 });
        expect(F80).toBeDisplayed();
        await F80.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Dodge02 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Dodge02.waitForExist({ timeout: 5000});
        await Dodge02.waitForDisplayed({ timeout: 5000 });
        expect(Dodge02).toBeDisplayed();
        await Dodge02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const SRT4 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await SRT4.waitForExist({ timeout: 5000});
        await SRT4.waitForDisplayed({ timeout: 5000 });
        expect(SRT4).toBeDisplayed();
        await SRT4.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Ford02 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Ford02.waitForExist({ timeout: 5000});
        await Ford02.waitForDisplayed({ timeout: 5000 });
        expect(Ford02).toBeDisplayed();
        await Ford02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Focus = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Focus.waitForExist({ timeout: 5000});
        await Focus.waitForDisplayed({ timeout: 5000 });
        expect(Focus).toBeDisplayed();
        await Focus.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Honda02 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Honda02.waitForExist({ timeout: 5000});
        await Honda02.waitForDisplayed({ timeout: 5000 });
        expect(Honda02).toBeDisplayed();
        await Honda02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Civic02 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Civic02.waitForExist({ timeout: 5000});
        await Civic02.waitForDisplayed({ timeout: 5000 });
        expect(Civic02).toBeDisplayed();
        await Civic02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const S2000zero = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await S2000zero.waitForExist({ timeout: 5000});
        await S2000zero.waitForDisplayed({ timeout: 5000 });
        expect(S2000zero).toBeDisplayed();
        await S2000zero.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Lexus = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Lexus.waitForExist({ timeout: 5000});
        await Lexus.waitForDisplayed({ timeout: 5000 });
        expect(Lexus).toBeDisplayed();
        await Lexus.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const IS300 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await IS300.waitForExist({ timeout: 5000});
        await IS300.waitForDisplayed({ timeout: 5000 });
        expect(IS300).toBeDisplayed();
        await IS300.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const IS250 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await IS250.waitForExist({ timeout: 5000});
        await IS250.waitForDisplayed({ timeout: 5000 });
        expect(IS250).toBeDisplayed();
        await IS250.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Mazda01 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Mazda01.waitForExist({ timeout: 5000});
        await Mazda01.waitForDisplayed({ timeout: 5000 });
        expect(Mazda01).toBeDisplayed();
        await Mazda01.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Mazda3 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Mazda01.waitForExist({ timeout: 5000});
        await Mazda01.waitForDisplayed({ timeout: 5000 });
        expect(Mazda01).toBeDisplayed();
        await Mazda01.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Miata02 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Miata02.waitForExist({ timeout: 5000});
        await Miata02.waitForDisplayed({ timeout: 5000 });
        expect(Miata02).toBeDisplayed();
        await Miata02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RX7two = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await RX7two.waitForExist({ timeout: 5000});
        await RX7two.waitForDisplayed({ timeout: 5000 });
        expect(RX7two).toBeDisplayed();
        await RX7two.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RX8two = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await RX8two.waitForExist({ timeout: 5000});
        await RX8two.waitForDisplayed({ timeout: 5000 });
        expect(RX8two).toBeDisplayed();
        await RX8two.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Mitsubishi02 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Mitsubishi02.waitForExist({ timeout: 5000});
        await Mitsubishi02.waitForDisplayed({ timeout: 5000 });
        expect(Mitsubishi02).toBeDisplayed();
        await Mitsubishi02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Lancer = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Lancer.waitForExist({ timeout: 5000});
        await Lancer.waitForDisplayed({ timeout: 5000 });
        expect(Lancer).toBeDisplayed();
        await Lancer.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Nissan02 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Nissan02.waitForExist({ timeout: 5000});
        await Nissan02.waitForDisplayed({ timeout: 5000 });
        expect(Nissan02).toBeDisplayed();
        await Nissan02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const a240SX = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await a240SX.waitForExist({ timeout: 5000});
        await a240SX.waitForDisplayed({ timeout: 5000 });
        expect(a240SX).toBeDisplayed();
        await a240SX.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const a300ZX = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await a300ZX.waitForExist({ timeout: 5000});
        await a300ZX.waitForDisplayed({ timeout: 5000 });
        expect(a300ZX).toBeDisplayed();
        await a300ZX.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const a350Z = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await a350Z.waitForExist({ timeout: 5000});
        await a350Z.waitForDisplayed({ timeout: 5000 });
        expect(a350Z).toBeDisplayed();
        await a350Z.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const a370Z = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await a370Z.waitForExist({ timeout: 5000});
        await a370Z.waitForDisplayed({ timeout: 5000 });
        expect(a370Z).toBeDisplayed();
        await a370Z.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Subaru02 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Subaru02.waitForExist({ timeout: 5000});
        await Subaru02.waitForDisplayed({ timeout: 5000 });
        expect(Subaru02).toBeDisplayed();
        await Subaru02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const BRZ02 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await BRZ02.waitForExist({ timeout: 5000});
        await BRZ02.waitForDisplayed({ timeout: 5000 });
        expect(BRZ02).toBeDisplayed();
        await BRZ02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Impreza = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Impreza.waitForExist({ timeout: 5000});
        await Impreza.waitForDisplayed({ timeout: 5000 });
        expect(Impreza).toBeDisplayed();
        await Impreza.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Legacy = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Legacy.waitForExist({ timeout: 5000});
        await Legacy.waitForDisplayed({ timeout: 5000 });
        expect(Legacy).toBeDisplayed();
        await Legacy.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Toyota02 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Toyota02.waitForExist({ timeout: 5000});
        await Toyota02.waitForDisplayed({ timeout: 5000 });
        expect(Toyota02).toBeDisplayed();
        await Toyota02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const FourRunner = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await FourRunner.waitForExist({ timeout: 5000});
        await FourRunner.waitForDisplayed({ timeout: 5000 });
        expect(FourRunner).toBeDisplayed();
        await FourRunner.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Celica = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Celica.waitForExist({ timeout: 5000});
        await Celica.waitForDisplayed({ timeout: 5000 });
        expect(Celica).toBeDisplayed();
        await Celica.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Corolla = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Corolla.waitForExist({ timeout: 5000});
        await Corolla.waitForDisplayed({ timeout: 5000 });
        expect(Corolla).toBeDisplayed();
        await Corolla.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Cressida = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Cressida.waitForExist({ timeout: 5000});
        await Cressida.waitForDisplayed({ timeout: 5000 });
        expect(Cressida).toBeDisplayed();
        await Cressida.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const GT86 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await GT86.waitForExist({ timeout: 5000});
        await GT86.waitForDisplayed({ timeout: 5000 });
        expect(GT86).toBeDisplayed();
        await GT86.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const MR2 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await MR2.waitForExist({ timeout: 5000});
        await MR2.waitForDisplayed({ timeout: 5000 });
        expect(MR2).toBeDisplayed();
        await MR2.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Supra = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Supra.waitForExist({ timeout: 5000});
        await Supra.waitForDisplayed({ timeout: 5000 });
        expect(Supra).toBeDisplayed();
        await Supra.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Tacoma = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Tacoma.waitForExist({ timeout: 5000});
        await Tacoma.waitForDisplayed({ timeout: 5000 });
        expect(Tacoma).toBeDisplayed();
        await Tacoma.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Tundra = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Tundra.waitForExist({ timeout: 5000});
        await Tundra.waitForDisplayed({ timeout: 5000 });
        expect(Tundra).toBeDisplayed();
        await Tundra.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async Mishimoto () {
        await Mishimoto.moveTo();
        const PerformanceRadiators = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await PerformanceRadiators.waitForExist({ timeout: 5000});
        await PerformanceRadiators.waitForDisplayed({ timeout: 5000 });
        expect(PerformanceRadiators).toBeDisplayed();
        await PerformanceRadiators.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Acura03 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Acura03.waitForExist({ timeout: 5000});
        await Acura03.waitForDisplayed({ timeout: 5000 });
        expect(Acura03).toBeDisplayed();
        await Acura03.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const BMW03 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await BMW03.waitForExist({ timeout: 5000});
        await BMW03.waitForDisplayed({ timeout: 5000 });
        expect(BMW03).toBeDisplayed();
        await BMW03.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Audi = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Audi.waitForExist({ timeout: 5000});
        await Audi.waitForDisplayed({ timeout: 5000 });
        expect(Audi).toBeDisplayed();
        await Audi.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Chevrolet02 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Chevrolet02.waitForExist({ timeout: 5000});
        await Chevrolet02.waitForDisplayed({ timeout: 5000 });
        expect(Chevrolet02).toBeDisplayed();
        await Chevrolet02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Dodge03 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Dodge03.waitForExist({ timeout: 5000});
        await Dodge03.waitForDisplayed({ timeout: 5000 });
        expect(Dodge03).toBeDisplayed();
        await Dodge03.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Ford03 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Ford03.waitForExist({ timeout: 5000});
        await Ford03.waitForDisplayed({ timeout: 5000 });
        expect(Ford03).toBeDisplayed();
        await Ford03.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Honda03 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Honda03.waitForExist({ timeout: 5000});
        await Honda03.waitForDisplayed({ timeout: 5000 });
        expect(Honda03).toBeDisplayed();
        await Honda03.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Hyundai02 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Hyundai02.waitForExist({ timeout: 5000});
        await Hyundai02.waitForDisplayed({ timeout: 5000 });
        expect(Hyundai02).toBeDisplayed();
        await Hyundai02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Infiniti = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Infiniti.waitForExist({ timeout: 5000});
        await Infiniti.waitForDisplayed({ timeout: 5000 });
        expect(Infiniti).toBeDisplayed();
        await Infiniti.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Lexus02 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Lexus02.waitForExist({ timeout: 5000});
        await Lexus02.waitForDisplayed({ timeout: 5000 });
        expect(Lexus02).toBeDisplayed();
        await Lexus02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Mazda02 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Mazda02.waitForExist({ timeout: 5000});
        await Mazda02.waitForDisplayed({ timeout: 5000 });
        expect(Mazda02).toBeDisplayed();
        await Mazda02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Mercedes = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Mercedes.waitForExist({ timeout: 5000});
        await Mercedes.waitForDisplayed({ timeout: 5000 });
        expect(Mercedes).toBeDisplayed();
        await Mercedes.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const MINI02 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await MINI02.waitForExist({ timeout: 5000});
        await MINI02.waitForDisplayed({ timeout: 5000 });
        expect(MINI02).toBeDisplayed();
        await MINI02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Mitsubishi03 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Mitsubishi03.waitForExist({ timeout: 5000});
        await Mitsubishi03.waitForDisplayed({ timeout: 5000 });
        expect(Mitsubishi03).toBeDisplayed();
        await Mitsubishi03.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Nissan03 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Nissan03.waitForExist({ timeout: 5000});
        await Nissan03.waitForDisplayed({ timeout: 5000 });
        expect(Nissan03).toBeDisplayed();
        await Nissan03.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Subaru03 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Subaru03.waitForExist({ timeout: 5000});
        await Subaru03.waitForDisplayed({ timeout: 5000 });
        expect(Subaru03).toBeDisplayed();
        await Subaru03.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Toyota03 = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Toyota03.waitForExist({ timeout: 5000});
        await Toyota03.waitForDisplayed({ timeout: 5000 });
        expect(Toyota03).toBeDisplayed();
        await Toyota03.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Volkswagen = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Volkswagen.waitForExist({ timeout: 5000});
        await Volkswagen.waitForDisplayed({ timeout: 5000 });
        expect(Volkswagen).toBeDisplayed();
        await Volkswagen.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async MOMO () {
        await MOMO.moveTo();
        const Harnesses = await $('//a[@class="m-link" and contains(text(), "Dodge")]');
        await Harnesses.waitForExist({ timeout: 5000});
        await Harnesses.waitForDisplayed({ timeout: 5000 });
        expect(Harnesses).toBeDisplayed();
        await Harnesses.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const HubAdapters = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await HubAdapters.waitForExist({ timeout: 5000});
        await HubAdapters.waitForDisplayed({ timeout: 5000 });
        expect(HubAdapters).toBeDisplayed();
        await HubAdapters.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Acura04 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await Acura04.waitForExist({ timeout: 5000});
        await Acura04.waitForDisplayed({ timeout: 5000 });
        expect(Acura04).toBeDisplayed();
        await Acura04.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Audi02 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await Audi02.waitForExist({ timeout: 5000});
        await Audi02.waitForDisplayed({ timeout: 5000 });
        expect(Audi02).toBeDisplayed();
        await Audi02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const BMW04 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await BMW04.waitForExist({ timeout: 5000});
        await BMW04.waitForDisplayed({ timeout: 5000 });
        expect(BMW04).toBeDisplayed();
        await BMW04.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Chevrolet03 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await Chevrolet03.waitForExist({ timeout: 5000});
        await Chevrolet03.waitForDisplayed({ timeout: 5000 });
        expect(Chevrolet03).toBeDisplayed();
        await Chevrolet03.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Ford04 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await Ford04.waitForExist({ timeout: 5000});
        await Ford04.waitForDisplayed({ timeout: 5000 });
        expect(Ford04).toBeDisplayed();
        await Ford04.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Mazda03 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await Mazda03.waitForExist({ timeout: 5000});
        await Mazda03.waitForDisplayed({ timeout: 5000 });
        expect(Mazda03).toBeDisplayed();
        await Mazda03.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Mercedes02 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await Mercedes02.waitForExist({ timeout: 5000});
        await Mercedes02.waitForDisplayed({ timeout: 5000 });
        expect(Mercedes02).toBeDisplayed();
        await Mercedes02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Mitsubishi04 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await Mitsubishi04.waitForExist({ timeout: 5000});
        await Mitsubishi04.waitForDisplayed({ timeout: 5000 });
        expect(Mitsubishi04).toBeDisplayed();
        await Mitsubishi04.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Nissan04 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await Nissan04.waitForExist({ timeout: 5000});
        await Nissan04.waitForDisplayed({ timeout: 5000 });
        expect(Nissan04).toBeDisplayed();
        await Nissan04.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Porsche = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await Porsche.waitForExist({ timeout: 5000});
        await Porsche.waitForDisplayed({ timeout: 5000 });
        expect(Porsche).toBeDisplayed();
        await Porsche.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Subaru04 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await Subaru04.waitForExist({ timeout: 5000});
        await Subaru04.waitForDisplayed({ timeout: 5000 });
        expect(Subaru04).toBeDisplayed();
        await Subaru04.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Toyota04 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await Toyota04.waitForExist({ timeout: 5000});
        await Toyota04.waitForDisplayed({ timeout: 5000 });
        expect(Toyota04).toBeDisplayed();
        await Toyota04.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Volkswagen02 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await Volkswagen02.waitForExist({ timeout: 5000});
        await Volkswagen02.waitForDisplayed({ timeout: 5000 });
        expect(Volkswagen02).toBeDisplayed();
        await Volkswagen02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Volvo = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await Volvo.waitForExist({ timeout: 5000});
        await Volvo.waitForDisplayed({ timeout: 5000 });
        expect(Volvo).toBeDisplayed();
        await Volvo.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Seats = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await Seats.waitForExist({ timeout: 5000});
        await Seats.waitForDisplayed({ timeout: 5000 });
        expect(Seats).toBeDisplayed();
        await Seats.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const SteeringWheels = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await SteeringWheels.waitForExist({ timeout: 5000});
        await SteeringWheels.waitForDisplayed({ timeout: 5000 });
        expect(SteeringWheels).toBeDisplayed();
        await SteeringWheels.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const HeritageWheels = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await HeritageWheels.waitForExist({ timeout: 5000});
        await HeritageWheels.waitForDisplayed({ timeout: 5000 });
        expect(HeritageWheels).toBeDisplayed();
        await HeritageWheels.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RacingSeries = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await RacingSeries.waitForExist({ timeout: 5000});
        await RacingSeries.waitForDisplayed({ timeout: 5000 });
        expect(RacingSeries).toBeDisplayed();
        await RacingSeries.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const StreetWheels = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await StreetWheels.waitForExist({ timeout: 5000});
        await StreetWheels.waitForDisplayed({ timeout: 5000 });
        expect(StreetWheels).toBeDisplayed();
        await StreetWheels.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const TowStraps = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await TowStraps.waitForExist({ timeout: 5000});
        await TowStraps.waitForDisplayed({ timeout: 5000 });
        expect(TowStraps).toBeDisplayed();
        await TowStraps.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async NRG () {
        await NRG.moveTo();
        const UniversalParts = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await UniversalParts.waitForExist({ timeout: 5000});
        await UniversalParts.waitForDisplayed({ timeout: 5000 });
        expect(UniversalParts).toBeDisplayed();
        await UniversalParts.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const LugNuts = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await LugNuts.waitForExist({ timeout: 5000});
        await LugNuts.waitForDisplayed({ timeout: 5000 });
        expect(LugNuts).toBeDisplayed();
        await LugNuts.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const M12x125 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await M12x125.waitForExist({ timeout: 5000});
        await M12x125.waitForDisplayed({ timeout: 5000 });
        expect(M12x125).toBeDisplayed();
        await M12x125.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const M12x15 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await M12x15.waitForExist({ timeout: 5000});
        await M12x15.waitForDisplayed({ timeout: 5000 });
        expect(M12x15).toBeDisplayed();
        await M12x15.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const HubAdapters02 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await HubAdapters02.waitForExist({ timeout: 5000});
        await HubAdapters02.waitForDisplayed({ timeout: 5000 });
        expect(HubAdapters02).toBeDisplayed();
        await HubAdapters02.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const AcuraHubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await AcuraHubs.waitForExist({ timeout: 5000});
        await AcuraHubs.waitForDisplayed({ timeout: 5000 });
        expect(AcuraHubs).toBeDisplayed();
        await AcuraHubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const AudiHubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await AudiHubs.waitForExist({ timeout: 5000});
        await AudiHubs.waitForDisplayed({ timeout: 5000 });
        expect(AudiHubs).toBeDisplayed();
        await AudiHubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const BMWhubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await BMWhubs.waitForExist({ timeout: 5000});
        await BMWhubs.waitForDisplayed({ timeout: 5000 });
        expect(BMWhubs).toBeDisplayed();
        await BMWhubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const FordHubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await FordHubs.waitForExist({ timeout: 5000});
        await FordHubs.waitForDisplayed({ timeout: 5000 });
        expect(FordHubs).toBeDisplayed();
        await FordHubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const HondaHubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await HondaHubs.waitForExist({ timeout: 5000});
        await HondaHubs.waitForDisplayed({ timeout: 5000 });
        expect(HondaHubs).toBeDisplayed();
        await HondaHubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const HyundaiHubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await HyundaiHubs.waitForExist({ timeout: 5000});
        await HyundaiHubs.waitForDisplayed({ timeout: 5000 });
        expect(HyundaiHubs).toBeDisplayed();
        await HyundaiHubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const InfinitiHubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await InfinitiHubs.waitForExist({ timeout: 5000});
        await InfinitiHubs.waitForDisplayed({ timeout: 5000 });
        expect(InfinitiHubs).toBeDisplayed();
        await InfinitiHubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const LexusHubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await LexusHubs.waitForExist({ timeout: 5000});
        await LexusHubs.waitForDisplayed({ timeout: 5000 });
        expect(LexusHubs).toBeDisplayed();
        await LexusHubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const MazdaHubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await MazdaHubs.waitForExist({ timeout: 5000});
        await MazdaHubs.waitForDisplayed({ timeout: 5000 });
        expect(MazdaHubs).toBeDisplayed();
        await MazdaHubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const MINIhubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await MINIhubs.waitForExist({ timeout: 5000});
        await MINIhubs.waitForDisplayed({ timeout: 5000 });
        expect(MINIhubs).toBeDisplayed();
        await MINIhubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const MitsubishiHubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await MitsubishiHubs.waitForExist({ timeout: 5000});
        await MitsubishiHubs.waitForDisplayed({ timeout: 5000 });
        expect(MitsubishiHubs).toBeDisplayed();
        await MitsubishiHubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const NissanHubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await NissanHubs.waitForExist({ timeout: 5000});
        await NissanHubs.waitForDisplayed({ timeout: 5000 });
        expect(NissanHubs).toBeDisplayed();
        await NissanHubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const ScionHubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await ScionHubs.waitForExist({ timeout: 5000});
        await ScionHubs.waitForDisplayed({ timeout: 5000 });
        expect(ScionHubs).toBeDisplayed();
        await ScionHubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const SubaruHubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await SubaruHubs.waitForExist({ timeout: 5000});
        await SubaruHubs.waitForDisplayed({ timeout: 5000 });
        expect(SubaruHubs).toBeDisplayed();
        await SubaruHubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const SuzukiHubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await SuzukiHubs.waitForExist({ timeout: 5000});
        await SuzukiHubs.waitForDisplayed({ timeout: 5000 });
        expect(SuzukiHubs).toBeDisplayed();
        await SuzukiHubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const ToyotaHubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await ToyotaHubs.waitForExist({ timeout: 5000});
        await ToyotaHubs.waitForDisplayed({ timeout: 5000 });
        expect(ToyotaHubs).toBeDisplayed();
        await ToyotaHubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const VolkswagenHubs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await VolkswagenHubs.waitForExist({ timeout: 5000});
        await VolkswagenHubs.waitForDisplayed({ timeout: 5000 });
        expect(VolkswagenHubs).toBeDisplayed();
        await VolkswagenHubs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const QuickReleases = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await QuickReleases.waitForExist({ timeout: 5000});
        await QuickReleases.waitForDisplayed({ timeout: 5000 });
        expect(QuickReleases).toBeDisplayed();
        await QuickReleases.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const QuickReleases20 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await QuickReleases20.waitForExist({ timeout: 5000});
        await QuickReleases20.waitForDisplayed({ timeout: 5000 });
        expect(QuickReleases20).toBeDisplayed();
        await QuickReleases20.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const QuickReleases21 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await QuickReleases21.waitForExist({ timeout: 5000});
        await QuickReleases21.waitForDisplayed({ timeout: 5000 });
        expect(QuickReleases21).toBeDisplayed();
        await QuickReleases21.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const QuickReleases25 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await QuickReleases25.waitForExist({ timeout: 5000});
        await QuickReleases25.waitForDisplayed({ timeout: 5000 });
        expect(QuickReleases25).toBeDisplayed();
        await QuickReleases25.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const QuickReleases30 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await QuickReleases30.waitForExist({ timeout: 5000});
        await QuickReleases30.waitForDisplayed({ timeout: 5000 });
        expect(QuickReleases30).toBeDisplayed();
        await QuickReleases30.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PrismaCollabQuickRelease = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await PrismaCollabQuickRelease.waitForExist({ timeout: 5000});
        await PrismaCollabQuickRelease.waitForDisplayed({ timeout: 5000 });
        expect(PrismaCollabQuickRelease).toBeDisplayed();
        await PrismaCollabQuickRelease.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RaceHandleQuickRelease = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await RaceHandleQuickRelease.waitForExist({ timeout: 5000});
        await RaceHandleQuickRelease.waitForDisplayed({ timeout: 5000 });
        expect(RaceHandleQuickRelease).toBeDisplayed();
        await RaceHandleQuickRelease.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const ShiftKnobs = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await ShiftKnobs.waitForExist({ timeout: 5000});
        await ShiftKnobs.waitForDisplayed({ timeout: 5000 });
        expect(ShiftKnobs).toBeDisplayed();
        await ShiftKnobs.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const SteeringWheelsNRG = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await SteeringWheelsNRG.waitForExist({ timeout: 5000});
        await SteeringWheelsNRG.waitForDisplayed({ timeout: 5000 });
        expect(SteeringWheelsNRG).toBeDisplayed();
        await SteeringWheelsNRG.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const LeatherWheels = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await LeatherWheels.waitForExist({ timeout: 5000});
        await LeatherWheels.waitForDisplayed({ timeout: 5000 });
        expect(LeatherWheels).toBeDisplayed();
        await LeatherWheels.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const SuedeWheels = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await SuedeWheels.waitForExist({ timeout: 5000});
        await SuedeWheels.waitForDisplayed({ timeout: 5000 });
        expect(SuedeWheels).toBeDisplayed();
        await SuedeWheels.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const WoodWheels = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await WoodWheels.waitForExist({ timeout: 5000});
        await WoodWheels.waitForDisplayed({ timeout: 5000 });
        expect(WoodWheels).toBeDisplayed();
        await WoodWheels.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PRISMAcollabSeats = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await PRISMAcollabSeats.waitForExist({ timeout: 5000});
        await PRISMAcollabSeats.waitForDisplayed({ timeout: 5000 });
        expect(PRISMAcollabSeats).toBeDisplayed();
        await PRISMAcollabSeats.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PRISMAultra = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await PRISMAultra.waitForExist({ timeout: 5000});
        await PRISMAultra.waitForDisplayed({ timeout: 5000 });
        expect(PRISMAultra).toBeDisplayed();
        await PRISMAultra.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async RbRebuilds () {
        await RbRebuilds.moveTo();
        const RBtriggerKit = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await RBtriggerKit.waitForExist({ timeout: 5000});
        await RBtriggerKit.waitForDisplayed({ timeout: 5000 });
        expect(RBtriggerKit).toBeDisplayed();
        await RBtriggerKit.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async SeemsLegitGarage () {
        await SeemsLegitGarage.moveTo();
        const BMWaxelSpacers = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await BMWaxelSpacers.waitForExist({ timeout: 5000});
        await BMWaxelSpacers.waitForDisplayed({ timeout: 5000 });
        expect(BMWaxelSpacers).toBeDisplayed();
        await BMWaxelSpacers.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async SPAL () {
        await SPAL.moveTo();
        const DualWHeelFanBlowers = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await DualWHeelFanBlowers.waitForExist({ timeout: 5000});
        await DualWHeelFanBlowers.waitForDisplayed({ timeout: 5000 });
        expect(DualWHeelFanBlowers).toBeDisplayed();
        await DualWHeelFanBlowers.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const MountingBrackets = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await MountingBrackets.waitForExist({ timeout: 5000});
        await MountingBrackets.waitForDisplayed({ timeout: 5000 });
        expect(MountingBrackets).toBeDisplayed();
        await MountingBrackets.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PullCurved = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await PullCurved.waitForExist({ timeout: 5000});
        await PullCurved.waitForDisplayed({ timeout: 5000 });
        expect(PullCurved).toBeDisplayed();
        await PullCurved.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PullPaddle = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await PullPaddle.waitForExist({ timeout: 5000});
        await PullPaddle.waitForDisplayed({ timeout: 5000 });
        expect(PullPaddle).toBeDisplayed();
        await PullPaddle.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PullStraight = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await PullStraight.waitForExist({ timeout: 5000});
        await PullStraight.waitForDisplayed({ timeout: 5000 });
        expect(PullStraight).toBeDisplayed();
        await PullStraight.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PushCurved = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await PushCurved.waitForExist({ timeout: 5000});
        await PushCurved.waitForDisplayed({ timeout: 5000 });
        expect(PushCurved).toBeDisplayed();
        await PushCurved.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PushPaddle = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await PushPaddle.waitForExist({ timeout: 5000});
        await PushPaddle.waitForDisplayed({ timeout: 5000 });
        expect(PushPaddle).toBeDisplayed();
        await PushPaddle.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PushStraight = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await PushStraight.waitForExist({ timeout: 5000});
        await PushStraight.waitForDisplayed({ timeout: 5000 });
        expect(PushStraight).toBeDisplayed();
        await PushStraight.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const WiringHarnesses = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await WiringHarnesses.waitForExist({ timeout: 5000});
        await WiringHarnesses.waitForDisplayed({ timeout: 5000 });
        expect(WiringHarnesses).toBeDisplayed();
        await WiringHarnesses.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async Sparco () {
        await Sparco.moveTo();
        const HubAdaptersSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await HubAdaptersSparco.waitForExist({ timeout: 5000});
        await HubAdaptersSparco.waitForDisplayed({ timeout: 5000 });
        expect(HubAdaptersSparco).toBeDisplayed();
        await HubAdaptersSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const AudiHubsSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await AudiHubsSparco.waitForExist({ timeout: 5000});
        await AudiHubsSparco.waitForDisplayed({ timeout: 5000 });
        expect(AudiHubsSparco).toBeDisplayed();
        await AudiHubsSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const BMWhubsSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await BMWhubsSparco.waitForExist({ timeout: 5000});
        await BMWhubsSparco.waitForDisplayed({ timeout: 5000 });
        expect(BMWhubsSparco).toBeDisplayed();
        await BMWhubsSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const FordHubsSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await FordHubsSparco.waitForExist({ timeout: 5000});
        await FordHubsSparco.waitForDisplayed({ timeout: 5000 });
        expect(FordHubsSparco).toBeDisplayed();
        await FordHubsSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const HondaHubsSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await HondaHubsSparco.waitForExist({ timeout: 5000});
        await HondaHubsSparco.waitForDisplayed({ timeout: 5000 });
        expect(HondaHubsSparco).toBeDisplayed();
        await HondaHubsSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const MazdaHubsSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await MazdaHubsSparco.waitForExist({ timeout: 5000});
        await MazdaHubsSparco.waitForDisplayed({ timeout: 5000 });
        expect(MazdaHubsSparco).toBeDisplayed();
        await MazdaHubsSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const NissanHubsSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await NissanHubsSparco.waitForExist({ timeout: 5000});
        await NissanHubsSparco.waitForDisplayed({ timeout: 5000 });
        expect(NissanHubsSparco).toBeDisplayed();
        await NissanHubsSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PorscheHubsSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await PorscheHubsSparco.waitForExist({ timeout: 5000});
        await PorscheHubsSparco.waitForDisplayed({ timeout: 5000 });
        expect(PorscheHubsSparco).toBeDisplayed();
        await PorscheHubsSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const SubaruHubsSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await SubaruHubsSparco.waitForExist({ timeout: 5000});
        await SubaruHubsSparco.waitForDisplayed({ timeout: 5000 });
        expect(SubaruHubsSparco).toBeDisplayed();
        await SubaruHubsSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const ToyotaHubsSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await ToyotaHubsSparco.waitForExist({ timeout: 5000});
        await ToyotaHubsSparco.waitForDisplayed({ timeout: 5000 });
        expect(ToyotaHubsSparco).toBeDisplayed();
        await ToyotaHubsSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const VWhubsSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await VWhubsSparco.waitForExist({ timeout: 5000});
        await VWhubsSparco.waitForDisplayed({ timeout: 5000 });
        expect(VWhubsSparco).toBeDisplayed();
        await VWhubsSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const SeatsSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await SeatsSparco.waitForExist({ timeout: 5000});
        await SeatsSparco.waitForDisplayed({ timeout: 5000 });
        expect(SeatsSparco).toBeDisplayed();
        await SeatsSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const ProAdvLf = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await ProAdvLf.waitForExist({ timeout: 5000});
        await ProAdvLf.waitForDisplayed({ timeout: 5000 });
        expect(ProAdvLf).toBeDisplayed();
        await ProAdvLf.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const CircuitSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await CircuitSparco.waitForExist({ timeout: 5000});
        await CircuitSparco.waitForDisplayed({ timeout: 5000 });
        expect(CircuitSparco).toBeDisplayed();
        await CircuitSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const CircuitIIsparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await CircuitIIsparco.waitForExist({ timeout: 5000});
        await CircuitIIsparco.waitForDisplayed({ timeout: 5000 });
        expect(CircuitIIsparco).toBeDisplayed();
        await CircuitIIsparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const EVOsparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await EVOsparco.waitForExist({ timeout: 5000});
        await EVOsparco.waitForDisplayed({ timeout: 5000 });
        expect(EVOsparco).toBeDisplayed();
        await EVOsparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const GridSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await GridSparco.waitForExist({ timeout: 5000});
        await GridSparco.waitForDisplayed({ timeout: 5000 });
        expect(GridSparco).toBeDisplayed();
        await GridSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PilotSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await PilotSparco.waitForExist({ timeout: 5000});
        await PilotSparco.waitForDisplayed({ timeout: 5000 });
        expect(PilotSparco).toBeDisplayed();
        await PilotSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const Pro2000Sparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await Pro2000Sparco.waitForExist({ timeout: 5000});
        await Pro2000Sparco.waitForDisplayed({ timeout: 5000 });
        expect(Pro2000Sparco).toBeDisplayed();
        await Pro2000Sparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const QRTsparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await QRTsparco.waitForExist({ timeout: 5000});
        await QRTsparco.waitForDisplayed({ timeout: 5000 });
        expect(QRTsparco).toBeDisplayed();
        await QRTsparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const SprintSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await SprintSparco.waitForExist({ timeout: 5000});
        await SprintSparco.waitForDisplayed({ timeout: 5000 });
        expect(SprintSparco).toBeDisplayed();
        await SprintSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const SteeringWheelsSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await SteeringWheelsSparco.waitForExist({ timeout: 5000});
        await SteeringWheelsSparco.waitForDisplayed({ timeout: 5000 });
        expect(SteeringWheelsSparco).toBeDisplayed();
        await SteeringWheelsSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const CombinationSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await CombinationSparco.waitForExist({ timeout: 5000});
        await CombinationSparco.waitForDisplayed({ timeout: 5000 });
        expect(CombinationSparco).toBeDisplayed();
        await CombinationSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const LeatherSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await LeatherSparco.waitForExist({ timeout: 5000});
        await LeatherSparco.waitForDisplayed({ timeout: 5000 });
        expect(LeatherSparco).toBeDisplayed();
        await LeatherSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const SuedeSparco = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await SuedeSparco.waitForExist({ timeout: 5000});
        await SuedeSparco.waitForDisplayed({ timeout: 5000 });
        expect(SuedeSparco).toBeDisplayed();
        await SuedeSparco.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async Turbosmart () {
        await Turbosmart.moveTo();
        const WasteGatesTurboSmart = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await WasteGatesTurboSmart.waitForExist({ timeout: 5000});
        await WasteGatesTurboSmart.waitForDisplayed({ timeout: 5000 });
        expect(WasteGatesTurboSmart).toBeDisplayed();
        await WasteGatesTurboSmart.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const IGW75 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await IGW75.waitForExist({ timeout: 5000});
        await IGW75.waitForDisplayed({ timeout: 5000 });
        expect(IGW75).toBeDisplayed();
        await IGW75.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const WG38 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await WG38.waitForExist({ timeout: 5000});
        await WG38.waitForDisplayed({ timeout: 5000 });
        expect(WG38).toBeDisplayed();
        await WG38.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const WG40 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await WG40.waitForExist({ timeout: 5000});
        await WG40.waitForDisplayed({ timeout: 5000 });
        expect(WG40).toBeDisplayed();
        await WG40.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const WG45 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await WG45.waitForExist({ timeout: 5000});
        await WG45.waitForDisplayed({ timeout: 5000 });
        expect(WG45).toBeDisplayed();
        await WG45.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const WG50 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await WG50.waitForExist({ timeout: 5000});
        await WG50.waitForDisplayed({ timeout: 5000 });
        expect(WG50).toBeDisplayed();
        await WG50.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const WG60 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await WG60.waitForExist({ timeout: 5000});
        await WG60.waitForDisplayed({ timeout: 5000 });
        expect(WG60).toBeDisplayed();
        await WG60.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const BlowOffValvesTurboSmart = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await BlowOffValvesTurboSmart.waitForExist({ timeout: 5000});
        await BlowOffValvesTurboSmart.waitForDisplayed({ timeout: 5000 });
        expect(BlowOffValvesTurboSmart).toBeDisplayed();
        await BlowOffValvesTurboSmart.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const BigBubba = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await BigBubba.waitForExist({ timeout: 5000});
        await BigBubba.waitForDisplayed({ timeout: 5000 });
        expect(BigBubba).toBeDisplayed();
        await BigBubba.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const BubbaSonic = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await BubbaSonic.waitForExist({ timeout: 5000});
        await BubbaSonic.waitForDisplayed({ timeout: 5000 });
        expect(BubbaSonic).toBeDisplayed();
        await BubbaSonic.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const DualPort = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await DualPort.waitForExist({ timeout: 5000});
        await DualPort.waitForDisplayed({ timeout: 5000 });
        expect(DualPort).toBeDisplayed();
        await DualPort.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const ProPort = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await ProPort.waitForExist({ timeout: 5000});
        await ProPort.waitForDisplayed({ timeout: 5000 });
        expect(ProPort).toBeDisplayed();
        await ProPort.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const PowerPort = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await PowerPort.waitForExist({ timeout: 5000});
        await PowerPort.waitForDisplayed({ timeout: 5000 });
        expect(PowerPort).toBeDisplayed();
        await PowerPort.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const RacePort = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await RacePort.waitForExist({ timeout: 5000});
        await RacePort.waitForDisplayed({ timeout: 5000 });
        expect(RacePort).toBeDisplayed();
        await RacePort.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const GaugesTurboSmart = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await GaugesTurboSmart.waitForExist({ timeout: 5000});
        await GaugesTurboSmart.waitForDisplayed({ timeout: 5000 });
        expect(GaugesTurboSmart).toBeDisplayed();
        await GaugesTurboSmart.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const BoostGauges = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await BoostGauges.waitForExist({ timeout: 5000});
        await BoostGauges.waitForDisplayed({ timeout: 5000 });
        expect(BoostGauges).toBeDisplayed();
        await BoostGauges.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const TurbosTurboSmart = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await TurbosTurboSmart.waitForExist({ timeout: 5000});
        await TurbosTurboSmart.waitForDisplayed({ timeout: 5000 });
        expect(TurbosTurboSmart).toBeDisplayed();
        await TurbosTurboSmart.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const T51 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await T51.waitForExist({ timeout: 5000});
        await T51.waitForDisplayed({ timeout: 5000 });
        expect(T51).toBeDisplayed();
        await T51.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const T52 = await $('//a[@class="m-link" and contains(text(), "HubAdapters")]');
        await T52.waitForExist({ timeout: 5000});
        await T52.waitForDisplayed({ timeout: 5000 });
        expect(T52).toBeDisplayed();
        await T52.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
    }

    async Vibrant () {
        const Vibrant = await $('//a[@class="m-link" and contains(text(), "Vibrant")]');
        await this.PartsButton.click();
        await Vibrant.moveTo();
        const Mufflers = await $('//a[@class="m-link" and contains(text(), "Mufflers")]');
        await Mufflers.waitForExist({ timeout: 5000});
        await Mufflers.waitForDisplayed({ timeout: 5000 });
        expect(Mufflers).toBeDisplayed();
        await Mufflers.moveTo();
        await Mufflers.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 1600); 
        });
        /**await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/mufflers-1',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Mufflers',
            });
*/
        await this.PartsButton.click();
        Vibrant.moveTo();
        await Mufflers.moveTo();
        const StreetSeries = await $('//a[@class="m-link" and contains(text(), "Street Series")]');
        await StreetSeries.waitForExist({ timeout: 5000});
        await StreetSeries.waitForDisplayed({ timeout: 5000 });
        expect(StreetSeries).toBeDisplayed();
        await StreetSeries.moveTo();
        await StreetSeries.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 1600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/street-series',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Street Series',
            });

        await this.PartsButton.click();
        await Vibrant.moveTo();
        await Mufflers.moveTo();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 1600); 
        });
        const TPVseries = await $('//a[@class="m-link" and contains(text(), "TPV Seires")]');
        await TPVseries.waitForExist({ timeout: 5000});
        await TPVseries.waitForDisplayed({ timeout: 5000 });
        expect(TPVseries).toBeDisplayed();
        await TPVseries.moveTo();
        await TPVseries.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/tpv-seires',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to TPV Series',
            });

        await this.PartsButton.click();
        await Vibrant.moveTo();
        const Resonators = await $('//a[@class="m-link" and contains(text(), "Resonators")]');
        await Resonators.waitForExist({ timeout: 5000});
        await Resonators.waitForDisplayed({ timeout: 5000 });
        expect(Resonators).toBeDisplayed();
        await Resonators.moveTo();
        await Resonators.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/resonators-2',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Resonators',
            });

        await this.PartsButton.click();
        await Vibrant.moveTo();
        await Resonators.moveTo();
        const UltraQuietSeries = await $('//a[@class="m-link" and contains(text(), "Ultra Quiet Series")]');
        await UltraQuietSeries.waitForExist({ timeout: 5000});
        await UltraQuietSeries.waitForDisplayed({ timeout: 5000 });
        expect(UltraQuietSeries).toBeDisplayed();
        await UltraQuietSeries.moveTo();
        await UltraQuietSeries.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/ultra-quiet-series',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Ultra Quiet Series',
            });

        await this.PartsButton.click();
        await Vibrant.moveTo();
        await Resonators.moveTo();
        const StainlessSeries = await $('//a[@class="m-link" and contains(text(), "Stainless Series")]');
        await StainlessSeries.waitForExist({ timeout: 5000});
        await StainlessSeries.waitForDisplayed({ timeout: 5000 });
        expect(StainlessSeries).toBeDisplayed();
        await StainlessSeries.moveTo();
        await StainlessSeries.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/stainless-series',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Mandrel Bends 15',
            });

        await this.PartsButton.click();
        await Vibrant.moveTo();
        const StainlessTubing = await $('//a[@class="m-link" and contains(text(), "Stainless Tubing")]');
        await StainlessTubing.waitForExist({ timeout: 5000});
        await StainlessTubing.waitForDisplayed({ timeout: 5000 });
        expect(StainlessTubing).toBeDisplayed();
        await StainlessTubing.moveTo();
    
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/stainless-tubing',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Stainless Tubing',
            });
        
        await this.PartsButton.click();
        await Vibrant.moveTo();  
        await StainlessTubing.moveTo();
        const MandrelBends15 = await $('//a[@class="m-link" and contains(text(), "Mandrel Bends 15")]');
        await MandrelBends15.waitForExist({ timeout: 5000});
        await MandrelBends15.waitForDisplayed({ timeout: 5000 });
        expect(MandrelBends15).toBeDisplayed();
        await MandrelBends15.moveTo();
        await MandrelBends15.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/mandrel-bends-15',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Mandrel Bends 15',
            });

        await this.PartsButton.click();
        await Vibrant.moveTo();  
        await StainlessTubing.moveTo();        
        const MandrelBends45 = await $('//a[@class="m-link" and contains(text(), "Mandrel Bends 45")]');
        await MandrelBends45.waitForExist({ timeout: 5000});
        await MandrelBends45.waitForDisplayed({ timeout: 5000 });
        expect(MandrelBends45).toBeDisplayed();
        await MandrelBends45.moveTo();
        await MandrelBends45.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/mandrel-bends-45',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Mandrel Bends 45',
            });

        await this.PartsButton.click();
        await Vibrant.moveTo();  
        await StainlessTubing.moveTo();          
        const MandrelBends60 = await $('//a[@class="m-link" and contains(text(), "Mandrel Bends 60")]');
        await MandrelBends60.waitForExist({ timeout: 5000});
        await MandrelBends60.waitForDisplayed({ timeout: 5000 });
        expect(MandrelBends60).toBeDisplayed();
        await MandrelBends60.moveTo();
        await MandrelBends60.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/mandrel-bends-60',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Mandrel Bends 60',
            });

        await this.PartsButton.click();
        await Vibrant.moveTo();  
        await StainlessTubing.moveTo();        
        const MandrelBends90 = await $('//a[@class="m-link" and contains(text(), "Mandrel Bends 90")]');
        await MandrelBends90.waitForExist({ timeout: 5000});
        await MandrelBends90.waitForDisplayed({ timeout: 5000 });
        expect(MandrelBends90).toBeDisplayed();
        await MandrelBends90.moveTo();
        await MandrelBends90.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/mandrel-bends-90',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Mandrel Bends 90',
            });

        await this.PartsButton.click();
        await Vibrant.moveTo();  
        await StainlessTubing.moveTo();            
        const MandrelBends180 = await $('//a[@class="m-link" and contains(text(), "Mandrel Bends 180")]');
        await MandrelBends180.waitForExist({ timeout: 5000});
        await MandrelBends180.waitForDisplayed({ timeout: 5000 });
        expect(MandrelBends180).toBeDisplayed();
        await MandrelBends180.moveTo();
        await MandrelBends180.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/mandrel-bends-180',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Mandrel Bends 180',
            });

        await this.PartsButton.click();
        await Vibrant.moveTo();  
        await StainlessTubing.moveTo();    
        const MandrelBendsUJ = await $('//a[@class="m-link" and contains(text(), "Mandrel Bends UJ")]');
        await MandrelBendsUJ.waitForExist({ timeout: 5000});
        await MandrelBendsUJ.waitForDisplayed({ timeout: 5000 });
        expect(MandrelBendsUJ).toBeDisplayed();
        await MandrelBendsUJ.moveTo();
        await MandrelBendsUJ.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/mandrel-bends-uj',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Mandrel Bend UJ',
            });

        await this.PartsButton.click();
        await Vibrant.moveTo();  
        await StainlessTubing.moveTo();  
        const StraighTubing = await $('//a[@class="m-link" and contains(text(), "Straight Tubing")]');
        await StraighTubing.waitForExist({ timeout: 5000});
        await StraighTubing.waitForDisplayed({ timeout: 5000 });
        expect(StraighTubing).toBeDisplayed();
        await StraighTubing.moveTo();
        await StraighTubing.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/straight-tubing',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Straight Tubing',
            });

        await this.PartsButton.click();
        await Vibrant.moveTo();    
        const VbandClamps = await $('//a[@class="m-link" and contains(text(), "V-Band Clamps")]');
        await VbandClamps.waitForExist({ timeout: 5000});
        await VbandClamps.waitForDisplayed({ timeout: 5000 });
        expect(VbandClamps).toBeDisplayed();
        await VbandClamps.moveTo();
        await StraighTubing.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/v-band-clamps',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to V-band Clamps',
            });

        await this.PartsButton.click();
        await Vibrant.moveTo();    
        const VbandFlangeAssemblies = await $('//a[@class="m-link" and contains(text(), "V-Band Flange Assemblies")]');
        await VbandFlangeAssemblies.waitForExist({ timeout: 5000});
        await VbandFlangeAssemblies.waitForDisplayed({ timeout: 5000 });
        expect(VbandFlangeAssemblies).toBeDisplayed();
        await VbandFlangeAssemblies.moveTo();
        await StraighTubing.click();
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/v-band-flange-assemblies',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to V-band Flange Assemblies',
            });
    }
    
    open () {
        return super.open();
    } 
}
export default new PartsSub();
