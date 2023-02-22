import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.component.html',
  styleUrls: ['./mycard.component.scss'],
})
export class MycardComponent implements OnInit {

  @Input() listaRec1: Array<Usuario>;
   
  constructor() {   this.listaRec1=[]; }

  ngOnInit() {}

}


 
 

 