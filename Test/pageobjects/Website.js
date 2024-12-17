import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'

export default class Website {

    JimmyO () {
        return browser.url(`https://shopjimmyo.com/`)
    }  
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
