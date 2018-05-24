import { Component, OnInit } from '@angular/core';
import { BeerService } from './beer.service';
import { Beer } from './beer';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
    providers: [BeerService]
})
export class AppComponent implements OnInit {

   title = 'Beer App';
   beer: Beer;

   constructor(private beerService: BeerService) { }

   ngOnInit() {
    this.generateRandomNumber()
   }

   generateRandomNumber() {
      this.beerService.getBeer(Math.floor(Math.random() * 10) + 1).subscribe(beer => this.beer = beer);

   }

}
