import { $ } from '@wdio/globals'
import Website from './Website.js';

class Cart extends Website {
    get Merchandise () {
        return $('a[href="/collections/merchandise"].site-nav__link--has-dropdown');
    }
    get Xbutton () {
        return $('//div[@class="upcart-header-close-button styles_Header__closeButton__IIDff"]');
    }
    get AddToCart () {
        return $('//span[@data-default-text="Add to cart"]');
    }
    get Plus () {
        return $('//button[@class="js-qty__adjust js-qty__adjust--plus"]');
    }
    get Minus () {
        return $('//button[@class="js-qty__adjust js-qty__adjust--minus"]');
    }
    get Remove () {
        return $('//div[@class="cart__remove"]');
    }
    get ContShopping () {
        return $('//a[@href="/collections/all"]');
    }
    get Shirt () {
        return $('//a[@href="/collections/merchandise/products/i-love-90s-junk-tee"]');
    }
    get Carticon () {
        return $('//span[@class="cart-link"]');
    }
    get Checkout () {
        return $('//div[@class="styles_Footer__checkoutButton__kdn9J"]');
    }

    async CartTest () {
        await this.Merchandise.click();
        const url = await browser.getUrl();
        expect(url).toBe('https://shopjimmyo.com/collections/merchandise');

        const Love90sJunk = await $('//a[@href="/collections/merchandise/products/i-love-90s-junk-tee"]');
        await Love90sJunk.moveTo();
        await Love90sJunk.waitForDisplayed({ timeout: 5000 });
        await Love90sJunk.click();

        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://shopjimmyo.com/collections/merchandise/products/i-love-90s-junk-tee',
            { timeout: 5000, timeoutMsg: 'URL did not change to I Love 90s Junk Tee Black' }
        );
        
        await browser.executeAsync(async (done) => {
            setTimeout(() => {
                done();
            }, 600);
        });

        const sizeOptions = ['Small', 'Medium', 'Large', 'XL', '3XL', '4XL'];

        for (let size of sizeOptions) {
                const sizeSelector = `//label[@class="variant__button-label" and contains(text(), "${size}")]`;
    const sizeLabel = await $(sizeSelector);

    const isSizeExisting = await sizeLabel.isExisting();
    if (!isSizeExisting) {
        console.log(`${size} size is not available, skipping...`);
        continue;
    }

    const soldOutSelector = './following-sibling::span[contains(@data-add-to-cart-text, "SOLD OUT")]';
    const soldOutIndicator = await sizeLabel.$(soldOutSelector);
    const isSoldOut = await soldOutIndicator.isExisting();

    if (isSoldOut) {
        console.log(`${size} size is sold out, skipping...`);
        continue;
    }
        
            await sizeLabel.moveTo();
            await sizeLabel.waitForDisplayed({ timeout: 5000 });
            await sizeLabel.click();
        
            await this.AddToCart.waitForClickable({ timeout: 5000 });
            await this.AddToCart.click();
        
            await this.Xbutton.waitForClickable({ timeout: 5000 });
            await this.Xbutton.scrollIntoView(); 
            await this.Xbutton.moveTo();
            await this.Xbutton.click();
        
            await this.Carticon.waitForClickable({ timeout: 5000 });
            await this.Carticon.moveTo();
            await this.Carticon.click();
            
            await this.Checkout.waitForClickable({ timeout: 5000 });
            await this.Checkout.moveTo();
            await this.Checkout.click();
            
            await this.Plus.waitForClickable({ timeout: 5000 });
            await this.Plus.moveTo();
            await this.Plus.click();
            
            await this.Remove.waitForClickable({ timeout: 5000 });
            await this.Remove.moveTo();
            await this.Remove.click();
            
            await this.ContShopping.waitForClickable({ timeout: 5000 });
            await this.ContShopping.moveTo();
            await this.ContShopping.click();
            
            await this.Merchandise.waitForClickable({ timeout: 5000 });
            await this.Merchandise.moveTo();
            await this.Merchandise.click();
            
            await this.Shirt.waitForClickable({ timeout: 5000 });
            await this.Shirt.moveTo();
            await this.Shirt.click();
    console.log(`Finished processing size: ${size}`); 


    
        
            await browser.executeAsync(async (done) => {
                setTimeout(() => {
                    done();
                }, 600);
            });
        }
    }       

    JimmyO () {
        return super.JimmyO();
    }
}

export default new Cart();

