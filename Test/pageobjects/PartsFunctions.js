import { $ } from '@wdio/globals'
import Page from './page.js';
import Selectors from './Selectors.js';


class Functions extends Page  {

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
    
    open () {
        return super.open();
    };
}

export default new Functions();