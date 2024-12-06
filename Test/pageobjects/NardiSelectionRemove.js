import { $ } from '@wdio/globals'
import Page from './page.js';


class NardiRemove extends Page {
    get HomeLogo () {
        return $('.site-header__logo-link.logo--has-inverted')
    }
    get Nardi () {
        return $('a[href="/collections/nardi"].site-nav__link--has-dropdown');
    }
    
    async NardiSelectionRemove() {
        await this.Nardi.click();
        const url = await browser.getUrl(); 
        expect(url).toBe('https://shopjimmyo.com/collections/nardi'); 
        
        
        const buttonRemove330 = await $('//a[contains(@href, "filter.v.option.material=Leather") and text()[normalize-space()="330mm"]]');
        await buttonRemove330.waitForClickable({ timeout: 5000 });
        await buttonRemove330.click();
        await buttonRemove330.click();
        /** await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/nardi?filter.v.option.material=Leather&filter.v.option.material=Suede&filter.v.option.material=Wood&filter.v.option.spoke+color=Black&filter.v.option.spoke+color=Brown&filter.v.option.spoke+color=Glossy&filter.v.option.spoke+color=Polished&filter.v.price.lte=485.00&filter.v.price.gte=0.00&filter.v.option.size=340mm&filter.v.option.size=350mm&filter.v.option.size=360mm&filter.v.option.size=390mm',
            {
                timeout: 5000,
                timeoutMsg: 'URL did not remove 330', 
            }) */
    }
    
    
    open () {
        return super.open();
    } 
}
export default new NardiRemove();


