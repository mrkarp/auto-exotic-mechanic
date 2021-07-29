import { Service } from './interfaces';

export class ShopPrices {

  static Services: Service[] = [
    { id: 1, name: "Engine 1", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 1625, customerCost: 3500, grouping: "Engine" },
    { id: 2, name: "Engine 2", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 2750, customerCost: 5500, grouping: "Engine" },
    { id: 3, name: "Engine 3", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 5225, customerCost: 8500, grouping: "Engine" },

    { id: 4, name: "Suspension 1", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 1625, customerCost: 3500, grouping: "Suspension" },
    { id: 5, name: "Suspension 2", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 2750, customerCost: 5500, grouping: "Suspension" },
    { id: 6, name: "Suspension 3", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 5225, customerCost: 8500, grouping: "Suspension" },

    { id: 7, name: "Transmission 1", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 1625, customerCost: 3500, grouping: "Transmission" },
    { id: 8, name: "Transmission 2", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 2750, customerCost: 5500, grouping: "Transmission" },
    { id: 9, name: "Transmission 3", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 5225, customerCost: 8500, grouping: "Transmission" },

    { id: 10, name: "Brakes 1", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 1625, customerCost: 3500, grouping: "Brakes" },
    { id: 11, name: "Brakes 2", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 2750, customerCost: 5500, grouping: "Brakes" },
    { id: 12, name: "Brakes 3", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 5225, customerCost: 8500, grouping: "Brakes" },

    { id: 13, name: "Turbo", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 7500, customerCost: 10500, grouping: "Misc" },

    { id: 14, name: "All 1", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 24500, customerCost: 24500, grouping: "Misc" },
    { id: 15, name: "All 2", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 32500, customerCost: 32500, grouping: "Misc" },
    { id: 16, name: "All 3", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 44500, customerCost: 44500, grouping: "Misc" },

    { id: 17, name: "Cosmetic Part", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 200, customerCost: 350, grouping: "Cosmetic" },
    { id: 18, name: "Paint", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 250, customerCost: 400, grouping: "Cosmetic" },
    { id: 19, name: "License Plate", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 250, customerCost: 400, grouping: "Cosmetic" },
    { id: 20, name: "Xenon Lights Kit", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 50, customerCost: 400, grouping: "Cosmetic" },
    { id: 21, name: "Neon Kit (per side)", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 100, customerCost: 100, grouping: "Cosmetic" },
    { id: 22, name: "Xenon/Neon Color", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 250, customerCost: 400, grouping: "Cosmetic" },


    { id: 23, name: "Basic Repair", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 1500, customerCost: 1500, grouping: "Repair" },

    { id: 24, name: "Brakes Repair", material: "Rubber", numOfMaterial: 0, internalPoints: 0, storeCost: 50, customerCost: 50, grouping: "Repair" },
    { id: 25, name: "Axle Repair", material: "Scrap", numOfMaterial: 0, internalPoints: 0, storeCost: 50, customerCost: 50, grouping: "Repair" },
    { id: 26, name: "Radiator Repair", material: "Scrap", numOfMaterial: 0, internalPoints: 0, storeCost: 50, customerCost: 50, grouping: "Repair" },
    { id: 27, name: "Clutch Repair", material: "Scrap", numOfMaterial: 0, internalPoints: 0, storeCost: 50, customerCost: 50, grouping: "Repair" },
    { id: 30, name: "Transmission Repair", material: "Aluminium", numOfMaterial: 0, internalPoints: 0, storeCost: 50, customerCost: 50, grouping: "Repair" },
    { id: 28, name: "Electronics Repair", material: "Plastic", numOfMaterial: 0, internalPoints: 0, storeCost: 50, customerCost: 50, grouping: "Repair" },
    { id: 31, name: "Injector Repair", material: "Copper", numOfMaterial: 0, internalPoints: 0, storeCost: 50, customerCost: 50, grouping: "Repair" },
    { id: 29, name: "Fuel Tank Repair", material: "Steel", numOfMaterial: 0, internalPoints: 0, storeCost: 50, customerCost: 50, grouping: "Repair" },
    { id: 29, name: "Body Repair", material: "Glass", numOfMaterial: 0, internalPoints: 0, storeCost: 50, customerCost: 50, grouping: "Repair" },
    { id: 29, name: "Engine Repair", material: "Scrap", numOfMaterial: 0, internalPoints: 0, storeCost: 50, customerCost: 50, grouping: "Repair" },

    { id: 32, name: "Roadside Repair", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 500, customerCost: 500, grouping: "Repair" },

    { id: 33, name: "Repair Kit", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 125, customerCost: 125, grouping: "Items" },
    { id: 34, name: "Adv. Repair Kit", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 500, customerCost: 500, grouping: "Items" },
    { id: 35, name: "Lockpick", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 50, customerCost: 50, grouping: "Items" },
    { id: 36, name: "Adv. Lockpick", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 350, customerCost: 350, grouping: "Items" },
    { id: 37, name: "Harness", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 3000, customerCost: 3000, grouping: "Items" },
    { id: 38, name: "NOS", material: "", numOfMaterial: 0, internalPoints: 0, storeCost: 5000, customerCost: 5000, grouping: "Items" },
  ];

  constructor() { }

}