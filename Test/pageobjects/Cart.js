import { $ } from '@wdio/globals'
import Page from './page.js';

class Cart extends Page {
    get Merchandise () {
        return $('a[href="/collections/merchandise"].site-nav__link--has-dropdown');
    }

    async CartTest () {
        await this.Merchandise.click();
        const url = await browser.getUrl(); 
        expect(url).toBe('https://shopjimmyo.com/collections/merchandise'); 
    }
    open () {
        return super.open();
    };
}

export default new Cart();