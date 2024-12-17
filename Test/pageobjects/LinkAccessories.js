import { $ } from '@wdio/globals';
import Website from './Website.js';

class LinkAccessories extends Website {
    get HomeLogo() {
        return $('.site-header__logo-link.logo--has-inverted');
    }

    get Link() {
        return $('a[href="/collections/link-accessories"].site-nav__link--has-dropdown');
    }

    async LinkDropDown() {
        await this.Link.click();

        const url = await browser.getUrl();
        expect(url).toBe('https://shopjimmyo.com/collections/link-accessories');

        const sortOptions = [
            { name: 'Featured', value: 'manual', expectedUrl: 'https://shopjimmyo.com/collections/link-accessories?sort_by=manual' },
            { name: 'Best selling', value: 'best-selling', expectedUrl: 'https://shopjimmyo.com/collections/link-accessories?sort_by=best-selling' },
            { name: 'Alphabetically, A-Z', value: 'title-ascending', expectedUrl: 'https://shopjimmyo.com/collections/link-accessories?sort_by=title-ascending' },
            { name: 'Alphabetically, Z-A', value: 'title-descending', expectedUrl: 'https://shopjimmyo.com/collections/link-accessories?sort_by=title-descending' },
            { name: 'Price, low to high', value: 'price-ascending', expectedUrl: 'https://shopjimmyo.com/collections/link-accessories?sort_by=price-ascending' },
            { name: 'Price, high to low', value: 'price-descending', expectedUrl: 'https://shopjimmyo.com/collections/link-accessories?sort_by=price-descending' },
            { name: 'Date, old to new', value: 'created-ascending', expectedUrl: 'https://shopjimmyo.com/collections/link-accessories?sort_by=created-ascending' },
            { name: 'Date, new to old', value: 'created-descending', expectedUrl: 'https://shopjimmyo.com/collections/link-accessories?sort_by=created-descending' }
        ];

        const sortDropdown = await $('//select[@name="SortBy"]');
        await sortDropdown.waitForDisplayed({ timeout: 5000 });
        await sortDropdown.click();

        for (const option of sortOptions) {
            console.log(`Selecting sort option: ${option.name}`);

            const optionElement = await $(`//option[@value="${option.value}" and contains(text(), "${option.name}")]`);
            await optionElement.waitForDisplayed({ timeout: 5000 });
            await optionElement.click();

            await browser.waitUntil(
                async () => (await browser.getUrl()) === option.expectedUrl,
                {
                    timeout: 5000,
                    timeoutMsg: `URL did not change for sort option: ${option.name}`
                }
            );

            console.log(`Successfully selected sort option: ${option.name}`);
            await browser.pause(500); 
        }
    }

    
    

    JimmyO() {
        return super.JimmyO();
    }
}

export default new LinkAccessories();
