import { Component, OnInit } from '@angular/core';
import { Service, ServiceGroup } from '../interfaces';
import { ShopPrices } from '../shop-prices';
import { DragulaService } from 'ng2-dragula';
import * as _ from 'lodash';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [DragulaService]
})

export class ShopComponent implements OnInit {
  public MANY_ITEMS: string = "MANY_ITEMS" + (Math.random() * 1000).toString();
  servicesGroups: ServiceGroup[] = [];
 
  purchasedServices: Service[] = [];

  serviceTotal: number = 0;
  serviceProfit: number = 0;
  serviceMaterials: Material[] = [];
  
  constructor(public dragulaService: DragulaService) { 
    this.servicesGroups = _.groupBy(ShopPrices.Services, x => x.grouping)
    this.servicesGroups = _.map(this.servicesGroups, (value, key) => {console.log(key);return { name: key, services: value }});

    console.log(this.servicesGroups);
  }

  ngOnInit(): void {
    
  }

  addService(service) {
    this.purchasedServices.push(service);
    this.serviceTotal += service.customerCost;
    this.serviceProfit += service.storeCost;
    if(service.material != '') {
      if(this.serviceMaterials.findIndex(x => x.name == service.material) > -1) {
        let index = this.serviceMaterials.findIndex(x => x.name == service.material);
        this.serviceMaterials[index].amount++;
      } else {
        this.serviceMaterials.push({ 
          name: service.material, 
          amount: 1
        });
      }
    }
  }

  removeService(service) {
    this.purchasedServices.splice(this.purchasedServices.indexOf(service), 1);
    this.serviceTotal -= service.customerCost;
    this.serviceProfit -= service.storeCost;
    if(service.material != '') {
      let index = this.serviceMaterials.findIndex(x => x.name == service.material);
      if(this.serviceMaterials[index].amount > 1) {
        this.serviceMaterials[index].amount--;
      } else {
        this.serviceMaterials.splice(index, 1);
      }
    }
  }
    
  save() {
    
  }

  reset() {

  }
}


export class Material {
  name: string;
  amount: number = 5;
}
