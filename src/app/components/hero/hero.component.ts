import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HerosService} from '../../services/heros.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',

})
export class HeroComponent  {

  hero:any= {};

  //get id of browser
  constructor( private activatedRoute: ActivatedRoute,
               private _herosServices:HerosService) {
    this.activatedRoute.params.subscribe(params => {
      
      this.hero=this._herosServices.getHero(params['id']);
      });
   }

   ngOnInit(): void {
    console.log(this.hero);
      }

    
}


