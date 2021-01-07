import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HerosService} from '../../services/heros.service';
import { HeroesComponent } from '../heroes/heroes.component';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    hero:any= {};
    my_hero:any= {};
    name_search: any = {};
   


    //get id of browser
    constructor( private activatedRoute: ActivatedRoute,
                 private _herosServices:HerosService,
                 private router:Router) {
      this.activatedRoute.queryParams.subscribe(params => {
      
        this.hero=this._herosServices.getHeros();
        });

        let name = this.activatedRoute.snapshot.paramMap.get('termino');
        let heroes = new HeroesComponent(this._herosServices,this.hero); 
      
        this.my_hero = heroes.buscarHeroes(name)[0];
        this.name_search = this.activatedRoute.snapshot.paramMap.get('termino');

        
      }



  

  ngOnInit(): void {

  
  }
}

