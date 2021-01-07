import { Component, OnInit } from '@angular/core';
import {HerosService, Hero} from '../../services/heros.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
heros:Hero[]=[];
//first is render constructor and then oninit 
  constructor(private _herosServices:HerosService,
    private router:Router) {
    
   }
// will show list of information heros
  ngOnInit(): void {
this.heros = this._herosServices.getHeros();


  }


  seeHero (idx:number) {
    this.router.navigate(['/hero',idx]);
console.log(idx);
  }

  buscarHeroes(termino:any) {
    console.log(termino);
    let heroesArr:Hero[]=[];
    termino = termino.toLocaleLowerCase();
    this.heros = this._herosServices.getHeros();

    for(let hero of this.heros) {
      
      let nombre = hero.nombre.toLowerCase();
      if (nombre.indexOf(termino)>= 0){
        heroesArr.push(hero);
      }
    }
    
    return heroesArr;
   
  }
 


}



