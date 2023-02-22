import { Component, OnInit } from '@angular/core';
import { Serviceorigentab } from 'src/app/services/serviceorigentab.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor( private mservice:Serviceorigentab) {}


  ngOnInit():void{
  
  }

  ionViewWillLeave(){    this.mservice.origentab = "tab3";  }
  ionViewWillEnter(){ console.log("Viene de " + this.mservice.origentab);}
}
