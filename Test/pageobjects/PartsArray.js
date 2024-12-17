import { $ } from '@wdio/globals'
import Website from './Website.js';

class Brands extends Website {
    async PartsMains () {
        const BrandsOptions = [
            "ADVAN", "ACT", "ARP",
            "Chase Bays", "Deatschwerks", "Enkei",
            "Fifteen52", "Funk Motorsport", "Garrett",
            "Gram Lights", "Greddy", "HKS",
            "ISR Performance", "Kansei", "KILL ALL WIPERS",
            "Koyo Radiators", "MOMO", "NRG",
            "RB-Rebuilds", "Seems Legit Garage", "SPAL",
            "Sparco", "Turbosmart", "Vibrant",
        ];

    return BrandsOptions;
}

async BrandsFunction(number) {
    return await $(`//a[@class="m-link"][contains(text(), "${number}")]`);
}

async processBrands() {
    const brandsOptions = await this.PartsMains();
    for (let brand of brandsOptions) {
        const element = await this.BrandsFunction(brand);
        if (await element.isExisting()) {
            console.log(`Element found for: ${brand}`);
            await element.click();
            await this.PartsButton.click();
            await element.waitForDisplayed({timeout: 5000})
            await element.moveTo();  
        } else {
            console.log(`Element not found for: ${brand}`);
        }
    }
}

    async ProductsPrimary () {
        const Primary = [
            "RG4", "Acura/Honda", "BMW",
            "Mazda", "Nissan", "Subaru",
            "Head Stud Kits", "Flywheel Bolt Kits", "Universal Chase Bays",
            "350Z / 370Z", "S13 / S14 / S15", "S2000",
            "Civic", "Miata", "PF01",
            "PF05", "PF09", "RPF1",
            "RPT1", "Center Caps", "Analog",
            "Integrate", "Tarmac", "Turbomac",
            "Universal Turbo Blankets", "Garett Turbo Blankets", "Line & Hose Protection",
            "Reflective Tape and Induction Sleeving", "Garrett Turbo Assemblies", "GTX Super Cores",
            "G Series Housings", "G Series Super Cores", "G Series Turbone Housings",
            "57DR", "57CR", "Center Caps",
            "WHeel Stickers", "Air Filters", "Exhaust",
            "Intercooler Kits", "HKS Apparel & Accessories", "Exhaust",
            "ISR Exhausts", "ISR Shift Knobs", "KNP",
            "Tandem", "Acura", "BMW",
            "Dodge", "Ford", "Honda", 
            "Lexus", "Mazda", "Mitsubishi",
            "Nissan", "Subaru", "Toyota",
            "Performance Radiators", "Harnesses", "Hub Adapters",
            "Seats", "Steering Wheels", "Tow Straps", 
            "Universal Parts", "Lug Nuts", "Hub Adapters",
            "Quick Releases", "Shift Knobs", "Steering Wheels",
            "PRISMA Collab Seats", "RB Trigger Kit", "BMW Axle Spacers",
            "Dual Wheel Fan Blowers", "Mounting Brackets", "Pull/Curved",
            "Pull/Paddle", "Pull/Straight", "Push/Curved",
            "Push/Paddle", "Push/Straight", "Wiring Harnesses",
            "Hub Adapters", "Seats", "Steering Wheels",
            "Wastegates", "Blow Off Valves", "Gauges",
            "Turbos", "Mufflers", "Resonators", 
            "Stainless Tubing", "V-Band Clamps", "V-Band Flange Assemblies",
        ]
        return Primary;
    }

    async Primary(number) {
        return await $(`//a[@class="m-tier-2"][contains(text(), "${number}")]`);
    }
    
    async processPrimary() {
        const Primary = await this.Primary();
        for (let item of Primary) {
            const element2 = await this.Primary(item);
            if (await element2.isExisting()) {
                console.log(`Element found for: ${item}`);
                await element2.click();
                await this.PartsButton.click();
                await element2.waitForDisplayed({timeout: 5000})
                await element2.moveTo();  
            } else {
                console.log(`Element not found for: ${item}`);
            }
        }
    }

    JimmyO () {
        return super.JimmyO();
    } 
}
export default new Brands();