import { $ } from '@wdio/globals'
import Page from './page.js';

class LinkAccessories extends Page {
    get HomeLogo () {
        return $('.site-header__logo-link.logo--has-inverted')
    }
    get Link () {
        return $('a[href="/collections/link-accessories"].site-nav__link--has-dropdown');
    }

    async LinkDropDown() {
        await this.Link.click();
        const url = await browser.getUrl(); 
        expect(url).toBe('https://shopjimmyo.com/collections/link-accessories'); 

       
        const SortDropdown = await $('//select[@name="SortBy"]');
        await SortDropdown.moveTo();
        await SortDropdown.waitForDisplayed({ timeout: 5000 });
        await SortDropdown.click();
        
        const SortFeatured = await $('//option[@value="manual" and contains(text(), "Featured")]');
        await SortFeatured.moveTo();
        await SortFeatured.waitForDisplayed({ timeout: 5000 });
        await SortFeatured.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/link-accessories?sort_by=manual',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Manual',
            });

        const SortBestSelling = await $('//option[@value="best-selling" and contains(text(), "Best selling")]');
        await SortBestSelling.moveTo();
        await SortBestSelling.waitForDisplayed({ timeout: 5000 });
        await SortBestSelling.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/link-accessories?sort_by=best-selling',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Best selling',
            });

        const SortAtoZ = await $('//option[@value="title-ascending" and contains(text(), "Alphabetically, A-Z")]');
        await SortAtoZ.moveTo();
        await SortAtoZ.waitForDisplayed({ timeout: 5000 });
        await SortAtoZ.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/link-accessories?sort_by=title-ascending',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Title Ascending',
            });

        const SortZtoA = await $('//option[@value="title-descending" and contains(text(), "Alphabetically, Z-A")]');
        await SortZtoA.moveTo();
        await SortZtoA.waitForDisplayed({ timeout: 5000 });
        await SortZtoA.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/link-accessories?sort_by=title-descending',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Title Descending',
            });

        const SortPriceLowtoHigh = await $('//option[@value="price-ascending" and contains(text(), "Price, low to high")]');
        await SortPriceLowtoHigh.moveTo();
        await SortPriceLowtoHigh.waitForDisplayed({ timeout: 5000 });
        await SortPriceLowtoHigh.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/link-accessories?sort_by=price-ascending',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Price Ascending',
            });

        const SortPriceHightoLow = await $('//option[@value="price-descending" and contains(text(), "Price, high to low")]');
        await SortPriceHightoLow.moveTo();
        await SortPriceHightoLow.waitForDisplayed({ timeout: 5000 });
        await SortPriceHightoLow.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/link-accessories?sort_by=price-descending',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Price Descending',
            });

        const SortDateOldtoNew = await $('//option[@value="created-ascending" and contains(text(), "Date, old to new")]');
        await SortDateOldtoNew.moveTo();
        await SortDateOldtoNew.waitForDisplayed({ timeout: 5000 });
        await SortDateOldtoNew.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/link-accessories?sort_by=created-ascending',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Created Ascending',
            });

        const SortDateNewtoOld = await $('//option[@value="created-descending" and contains(text(), "Date, new to old")]');
        await SortDateNewtoOld.moveTo();
        await SortDateNewtoOld.waitForDisplayed({ timeout: 5000 });
        await SortDateNewtoOld.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/link-accessories?sort_by=created-descending',
            {
                timeout: 500,
                timeoutMsg: 'URL did not change to Created Descending',
            });

    }
    open () {
        return super.open();
    };
}

export default new LinkAccessories();