import { $ } from '@wdio/globals'
import Page from './page.js';

class Brands extends Page {
    async PartsMains () {
        const BrandsOptions = [
            "ADVAN", "RG4", "ACT",
            "Acura/Honda", "Civic", "Integra",
            "S2000", "RSX", "BMW", 
            "E36", "M3", "Mazda",
            "Miata", "RX7", "RX8",
            "Nissan", "240SX", "300ZX",
            "350Z", "Subaru", "BRZ",
            
            "ARP",

            "ChaseBays",
            
            "Deatschwerks",
            
            "Enkei",

            "Fifteen52",
            
            "Funk Motorsports",
            
            "Garrett",

            "Gram Lights",
            
            "Greddy",
            
            "HKS",

            "ISR Performance",
            
            "Kansei",
            
            "KILL ALL WIPERS",

            "Koyo Radiators",
            
            "MOMO",
            
            "NRG",

            "RB-Rebuilds",
            
            "Seems Legit Garage",
            
            "SPAL",
            
            "Sparco",
            
            "Turbosmart",
            
            "Vibrant",
        ];

    return BrandsOptions; // Return the array
}

async BrandsFunction(number) {
    return await $(`//a[@class="m-link"][contains(text(), "${number}")]`);
}

async processBrands() {
    const brandsOptions = await this.PartsMains(); // Get the array from PartsMains()
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
        return await $(`//a[@class="m-link"][contains(text(), "${number}")]`);
    }
    
    async processPrimary() {
        const Primary = await this.ProductsPrimary(); // Get the array from PartsMains()
        for (let brand of Primary) {
            const element = await this.BrandsFunction(brand);
            if (await element.isExisting()) {
                console.log(`Element found for: ${brand}`);
                await element.click();
                await this.PartsButton.click();
            } else {
                console.log(`Element not found for: ${brand}`);
            }
        }
    }

    async PartsSecondary() {
        const Secondary = [
            "Civic", "Integra", "S2000",
            "RSX", "E36", "M3",
            "Miata", "RX7", "RX8",
            "240SX", "300ZX", "350Z",
            "BRZ", "Acura/Honda", "BMW",
            "Chevrolet", "Ford", "Hyundai",
            "Mazda", "MINI", "Mitsubishi",
            "Nissan", "Subaru", "Toyota",
            "Acura / Honda", "Fuel Injectors", "Fuel Pumps",
            "17 Inch", "18 Inch", "15 Inch",
            "16 Inch", "G Series", "GT Series",
            "GTX Series", "GTX28", "G25 Super Cores",
            "G25 Turbine Housings", "19 Inch", 
            "EVOlution GT", "Revolution RS", "Vehicle Specific Intercooler Kits",
            "Universal Intercooler Kits", "Hi-Power", "Hi-Power Silent",
            "Super Turbo", "Circuit Exhausts", "GT Single Exhausts",
            "OMS Spec Exhausts", "Racing Exhausts", "Series 1 EP Blast Pipes",
            "Series 2 EP Blast Pipes", "Series 2 GT Blast Pipes", "ST Exhausts",
            "MBSE Axle Back Exhausts", "Series II EP Axle Back", "Integra", 
            "NSX", "RSX", "TSX",
            "E36", "E46", "F80/82/83",
            "SRT-4", "Focus", "IS300",
            "IS250/IS350", "Mazda3/Speed3", "Miata",
            "RX-7", "RX-8", "Lancer / EVO",
            "240sx", "300zx", "350z", 
            "370z", "BRZ", "Impreza/WRX/STI",
            "4Runner", "Celica", "Corolla",
            "Cressida", "GT86/FRS", "MR2",
            "Supra", "Tacoma", "Tundra",
            "Acura", "BMW", "Audi",
            "Chevrolet", "Dodge", "Ford",
            "Honda", "Hyundai", "Infiniti",
            "Lexus", "Mazda", "Mercedes-Benz",
            "MINI", "Mitsubishi", "Nissan",
            "Subaru", "Toyota", "Volkswagen",
            "Porsche", "Volvo", "Heritage Wheels",
            "Racing Series", "Street Series", "M12 X 1.25",
            "M12 X 1.5", "Acura Hubs", "Audi Hubs",
            "BMW Hubs", "Ford Hubs", "Honda Hubs",
            "Hyundai Hubs", "Infiniti Hubs", "Lexus Hubs",
            "Mazda Hubs", "MINI Hubs", "Mitsubishi Hubs",
            "Nissan Hubs", "Scion Hubs", "Subaru Hubs",
            "Suzuki Hubs", "Toyota Hubs", "Volkswagen Hubs",
            "2.0 Quick Releases", "2.1 Quick Releases", "2.5 Quick Releases",
            "3.0 Quick Releases", "Prisma Collab Quick Releases", "Race Handle Quick Release",
            "Leather", "Suede", "Wood", 
            "PRISMA ULTRA", "Porsche Hubs", "VW Hubs",
            "PRO ADV LF", "Circuit", "Circuit II",
            "EVO", "Grid", "Pilot",
            "Pro 2000", "QRT", "Sprint",
            "Combination", "IGW75", "WG38",
            "WG40", "WG45", "WG50",
            "WG60", "Big Bubba", "Bubba Sonic",
            "Dual Port", "Pro Port", "Power Port",
            "Race Port", "Boost Gauges", "TS-1",
            "TS-2", "Street Series", "TPV Seires",
            "Ultra Quiet Series", "Stainless Series", "Mandrel Bends 15",
            "Mandrel Bends 45", "Mandrel Bends 60", "Mandrel Bends 90", 
            "Mandrel Bends 180", "Mandrel Bends UJ", "Straight Tubing",
        ]
    }

    open () {
        return super.open();
    } 
}
export default new Brands();