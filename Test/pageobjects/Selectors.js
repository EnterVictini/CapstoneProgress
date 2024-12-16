
import { $ } from '@wdio/globals'
import Page from './page.js';
class Selectors extends Page {
    get HomeLogo () {
        return $('.site-header__logo-link.logo--has-inverted')
    }
    get PartsButton () {
        return $('//a[@class="site-nav__link site-nav__link--underline"]')
    }
    get Nardi () {
        return $('a[href="/collections/nardi"].site-nav__link--has-dropdown');
    }
    get Merchandise () {
        return $('a[href="/collections/merchandise"].site-nav__link--has-dropdown');
    }
    get Link () {
        return $('a[href="/collections/link-accessories"].site-nav__link--has-dropdown');
    }
}
    export default new Selectors();