import { Component } from '@angular/core';

import { DataService } from '@lvl/core';
import { House } from '@lvl/real-estate';

@Component({
    selector: 'lvl-housing-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    public houses: House[];

    constructor(private dataService: DataService) {
        this.dataService.get(House).subscribe(houses => this.houses = houses);
    }
}
