import NardiProducts from '../pageobjects/NardiProducts.js'

describe('Nardi', () => {
    it('Test', async () => {
        await NardiProducts.JimmyO();

        await NardiProducts.NardiSelections();

        await NardiProducts.slider();
    })
})