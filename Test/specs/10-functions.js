import NardiProducts from '../pageobjects/NardiProducts.js'

describe('Nardi', () => {
    it('Test', async () => {
        await NardiProducts.open();

        await NardiProducts.NardiSelections();

        await NardiProducts.slider();
    })
})