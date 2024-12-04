import { $ } from '@wdio/globals'
import Page from './page.js';

class SecurePage extends Page {

    get homePageLogo () {
        return $('div[class="header-item header-item--logo"]');
    }

}

export default new SecurePage();