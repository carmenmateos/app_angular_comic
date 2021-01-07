import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

 @Input() hero:any={};
 @Input() index?:number;

 @Output() heroSelect:EventEmitter<number>;

  constructor(private router:Router) {
    this.heroSelect= new EventEmitter();
   }

  ngOnInit(): void {

  }

   seeHero () {
     this.heroSelect.emit(this.index);
  //   this.router.navigate(['/hero',this.index]);
  //   console.log(this.index);
   }
}
