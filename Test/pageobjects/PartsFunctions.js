import { $ } from '@wdio/globals'
import Website from './Website.js';


class Functions extends Website  {

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
    
    JimmyO () {
        return super.JimmyO();
    };
}

export default new Functions();