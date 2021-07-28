
  export interface Service {
    id: number;
    name: string;
    material: string;
    numOfMaterial: number;
    internalPoints: number;
    storeCost: number;
    customerCost: number;
    grouping: string;
  }

  
  export interface ServiceGroup {
    name: string;
    services: Service[];
  }