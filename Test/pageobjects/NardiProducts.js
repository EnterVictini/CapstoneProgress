import { $, $$ } from '@wdio/globals';
import Website from './Website.js';

class NardiProducts extends Website {
    get HomeLogo() {
        return $('.site-header__logo-link.logo--has-inverted');
    }

    get Nardi() {
        return $('a[href="/collections/nardi"].site-nav__link--has-dropdown');
    }

    async NardiSelections() {
        await this.Nardi.click();
        const url = await browser.getUrl(); 
        expect(url).toBe('https://shopjimmyo.com/collections/nardi'); 

       
        const buttonSize330 = await $('span.tag__text=330mm');
        await buttonSize330.moveTo();
        await buttonSize330.waitForDisplayed({ timeout: 5000 });
        await buttonSize330.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to size 330',
            })
            
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                    done();
            }, 600); 
        });

        const buttonSize340 = await $('span.tag__text=340mm');   
        await buttonSize340.waitForDisplayed({ timeout: 5000 });
        await buttonSize340.moveTo();
        await buttonSize340.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to size 340',
            }) 
        
            await browser.executeAsync(async (done) => {
                setTimeout(() => {
                        done();
                }, 600); 
            });

        const buttonSize350 = await $('span.tag__text=350mm');
        await buttonSize350.moveTo();
        await buttonSize350.waitForDisplayed({ timeout: 5000 });
        await buttonSize350.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to size 350',
            })

            await browser.executeAsync(async (done) => {
                setTimeout(() => {
                        done();
                }, 600); 
            });

        const buttonSize360 = await $('span.tag__text=360mm');
        await buttonSize360.moveTo();
        await buttonSize360.waitForDisplayed({ timeout: 5000 });
        await buttonSize360.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to size 360',
            })

            await browser.executeAsync(async (done) => {
                setTimeout(() => {
                        done();
                }, 600); 
            });
            
        const buttonSize390 = await $('span.tag__text=390mm');
        await buttonSize390.moveTo();
        await buttonSize390.waitForDisplayed({ timeout: 5000 });
        await buttonSize390.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to size 390', 
            })
        
            await browser.executeAsync(async (done) => {
                setTimeout(() => {
                        done();
                }, 600); 
            });

        const buttonLeather = await $('span.tag__text=Leather');
        await buttonLeather.moveTo();
        await buttonLeather.waitForDisplayed({ timeout: 5000 });
        await buttonLeather.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm&filter.v.option.material=Leather',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to Leather', 
            })
        
            await browser.executeAsync(async (done) => {
                setTimeout(() => {
                        done();
                }, 600); 
            });

        const buttonSuede = await $('span.tag__text=Suede');
        await buttonSuede.moveTo();
        await buttonSuede.waitForDisplayed({ timeout: 5000 });
        await buttonSuede.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm&filter.v.option.material=Leather&filter.v.option.material=Suede',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to Suede', 
            })
            
            await browser.executeAsync(async (done) => {
                setTimeout(() => {
                        done();
                }, 600); 
            });

        const buttonWood = await $('span.tag__text=Wood');
        await buttonWood.moveTo();
        await buttonWood.waitForDisplayed({ timeout: 5000 });
        await buttonWood.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm&filter.v.option.material=Leather&filter.v.option.material=Suede&filter.v.option.material=Wood',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to Wood', 
            })
               
            await browser.executeAsync(async (done) => {
                setTimeout(() => {
                        done();
                }, 600); 
            });

        const buttonBlack = await $('span.tag__text=Black');
        await buttonBlack.moveTo();
        await buttonBlack.waitForDisplayed({ timeout: 5000 });
        await buttonBlack.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm&filter.v.option.material=Leather&filter.v.option.material=Suede&filter.v.option.material=Wood&filter.v.option.spoke+color=Black',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to Black', 
            })
       
            await browser.executeAsync(async (done) => {
                setTimeout(() => {
                        done();
                }, 600); 
            });

        const buttonBrown = await $('span.tag__text=Brown');
        await buttonBrown.moveTo();
        await buttonBrown.waitForDisplayed({ timeout: 5000 });
        await buttonBrown.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm&filter.v.option.material=Leather&filter.v.option.material=Suede&filter.v.option.material=Wood&filter.v.option.spoke+color=Black&filter.v.option.spoke+color=Brown',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to Brown', 
            })

            await browser.executeAsync(async (done) => {
                setTimeout(() => {
                        done();
                }, 600); 
            });

        const buttonGlossy = await $('span.tag__text=Glossy');
        await buttonGlossy.moveTo();
        await buttonGlossy.waitForDisplayed({ timeout: 5000 });
        await buttonGlossy.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm&filter.v.option.material=Leather&filter.v.option.material=Suede&filter.v.option.material=Wood&filter.v.option.spoke+color=Black&filter.v.option.spoke+color=Brown&filter.v.option.spoke+color=Glossy',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to Glossy', 
            })

            await browser.executeAsync(async (done) => {
                setTimeout(() => {
                        done();
                }, 600); 
            });

        const buttonPolished = await $('span.tag__text=Polished');
        await buttonPolished.moveTo();
        await buttonPolished.waitForDisplayed({ timeout: 5000 });
        await buttonPolished.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm&filter.v.option.material=Leather&filter.v.option.material=Suede&filter.v.option.material=Wood&filter.v.option.spoke+color=Black&filter.v.option.spoke+color=Brown&filter.v.option.spoke+color=Glossy&filter.v.option.spoke+color=Polished',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to Polished', 
            })
    }

    async slider() {
        const slider = await $('//div[@class="noUi-touch-area"]');
        const xOffset = 50; 

        await browser.performActions([
            {
                type: 'pointer',
                id: 'mouse1',
                parameters: { pointerType: 'mouse' },
                actions: [
                    { type: 'pointerMove', origin: slider, x: 0, y: 0 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerMove', origin: 'pointer', x: xOffset, y: -20 },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);

        const minPriceElement = await $('span[class="price-range__display-min"]');
        const text = await minPriceElement.getText();
        const numericValue = parseFloat(text.replace('$', ''));

        console.log(`Slider adjusted to minimum price: ${numericValue}`);
        expect(numericValue).toBeLessThanOrEqual(400.00);

    }

    JimmyO() {
        return super.JimmyO();
    }
}

export default new NardiProducts();
