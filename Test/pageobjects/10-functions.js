import { $ } from '@wdio/globals'
import Page from './page.js';

class NardiProducts extends Page {
    get HomeLogo () {
        return $('.site-header__logo-link.logo--has-inverted')
    }
    get Nardi () {
        return $('a[href="/collections/nardi"].site-nav__link--has-dropdown');
    }
    get leather () {
        return $('//span[contains(text(),"Leather")]')
    } 
    get suede () {
        return $('//span[contains(text(),"Suede")]')
    }
    get wood () {
        return $('//span[contains(text(),"Wood")]')
    }
    get black () {
        return $('//span[contains(text(),"Black")]')
    }
    get brown () {
        return $('//span[contains(text(),"Brown")]')
    }
    get glossy () {
        return $('//span[contains(text(),"Glossy")]')
    }
    get polshed () {
        return $('//span[contains(text(),"Polished")]')
    }
    
    async NardiSelections() {
        await this.Nardi.click();
        const url = await browser.getUrl(); 
        expect(url).toBe('https://shopjimmyo.com/collections/nardi'); 

       
        const buttonSize330 = await $('span.tag__text=330mm');
        await buttonSize330.waitForClickable({ timeout: 5000 });
        await buttonSize330.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to size 330',
            })

        const buttonSize340 = await $('span.tag__text=340mm');
        await buttonSize340.waitForClickable({ timeout: 5000 });
        await buttonSize340.click();
        await buttonSize340.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to size 340',
            })
        
        const buttonSize350 = await $('span.tag__text=350mm');
        await buttonSize350.waitForClickable({ timeout: 5000 });
        await buttonSize350.click();
        await buttonSize350.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to size 350',
            })

        const buttonSize360 = await $('span.tag__text=360mm');
        await buttonSize360.waitForClickable({ timeout: 5000 });
        await buttonSize360.click();
        await buttonSize360.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to size 360',
            })

        const buttonSize390 = await $('span.tag__text=390mm');
        await buttonSize390.waitForClickable({ timeout: 5000 });
        await buttonSize390.click();
        await buttonSize390.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not change to size 390', 
            })
        
        
        

        await this.leather.click();
        expect(url).toBe('https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm&filter.v.option.material=Leather'); 

        await this.suede.click();
        expect(url).toBe('https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm&filter.v.option.material=Leather&filter.v.option.material=Suede'); 

        await this.wood.click();
        expect(url).toBe('https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm&filter.v.option.material=Leather&filter.v.option.material=Suede&filter.v.option.material=Wood'); 

        await this.black.click();
        expect(url).toBe('https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm&filter.v.option.material=Leather&filter.v.option.material=Suede&filter.v.option.material=Wood&filter.v.option.spoke+color=Black'); 

        await this.brown.click();
        expect(url).toBe('https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm&filter.v.option.material=Leather&filter.v.option.material=Suede&filter.v.option.material=Wood&filter.v.option.spoke+color=Black&filter.v.option.spoke+color=Brown'); 


        await this.glossy.click();
        expect(url).toBe('https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm&filter.v.option.material=Leather&filter.v.option.material=Suede&filter.v.option.material=Wood&filter.v.option.spoke+color=Black&filter.v.option.spoke+color=Brown&filter.v.option.spoke+color=Glossy'); 
        await this.polshed.click(); 
        expect(url).toBe('https://shopjimmyo.com/collections/nardi?filter.v.option.size=330mm&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm&filter.v.option.material=Leather&filter.v.option.material=Suede&filter.v.option.material=Wood&filter.v.option.spoke+color=Black&filter.v.option.spoke+color=Brown&filter.v.option.spoke+color=Glossy&filter.v.option.spoke+color=Polished'); 
        
    }

    async slider () {
        const slider = await $('div[class="noUi-touch-area"]'); 
        const xOffset = 50; 

    await browser.performActions([
        {
            type: 'pointer',
            id: 'mouse1',
            parameters: { pointerType: 'mouse' },
            actions: [
                { type: 'pointerMove', origin: slider, x: 0, y: 0 },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerMove', origin: 'pointer', x: xOffset, y: -25 },
                { type: 'pointerUp', button: 0 },
        ],
    },
]);


    const sliderValue = await slider.getValue();
    console.log(`Slider value: ${sliderValue}`);

    const element = await $('span[class="price-range__display-min"]');
    const text = await element.getText();
    const numericValue = parseFloat(text.replace('$', ''));
    expect(numericValue).toBeGreaterThanOrEqual(120.00);
    }




    open () {
        return super.open();
    }
}

export default new NardiProducts();