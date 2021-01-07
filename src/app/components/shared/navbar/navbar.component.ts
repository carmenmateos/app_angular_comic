import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


buscarTExto !:ElementRef;

  constructor(private router: Router,
              ) { 
              this.buscarTexto =  this.buscarTExto;
              }

              @ViewChild('buscarTexto', {static:true}) buscarTexto:ElementRef<any>;
  ngOnInit(): void {
  }

  

buscarHeroe( termino:string){
  return termino;
}


redirect() {

  let texto=this.buscarTexto.nativeElement.value

  this.router.navigate(['./search/',texto]);
 
}

}
