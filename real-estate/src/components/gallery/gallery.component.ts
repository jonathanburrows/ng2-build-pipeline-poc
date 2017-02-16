import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

import { House } from '../../models';
import { DataService } from '@lvl/core';

@Component({
    selector: 'lvl-estate-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    @ViewChild('address') address: ElementRef;

    public houses: House[];
    public houseToPurchase: House;

    constructor(private dataService: DataService) {
        this.dataService.get(House).subscribe(houses => this.houses = houses);
        this.houseToPurchase = new House();
    }

    public ngOnInit() {
        this.address.nativeElement.focus();
    }

    public purchaseHouse() {
        const purchasing = this.houseToPurchase;

        if (purchasing.address && purchasing.architectureStyle && purchasing.squareFeet) {
            this.dataService.create(purchasing, House).subscribe(_ => this.address.nativeElement.focus());
            this.houseToPurchase = new House();
        }
    }
}
