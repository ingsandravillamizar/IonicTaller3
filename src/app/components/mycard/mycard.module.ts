import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycardComponent } from './mycard.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MycardComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports:[MycardComponent]
})
export class MycardModule { }


