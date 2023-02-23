import { Component } from '@angular/core';
import { MystorageService } from './services/mystorage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage:MystorageService) {}
}
