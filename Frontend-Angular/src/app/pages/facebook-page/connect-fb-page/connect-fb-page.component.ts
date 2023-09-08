import { Component } from '@angular/core';

@Component({
  selector: 'richpannel-connect-fb-page',
  templateUrl: './connect-fb-page.component.html',
  styleUrls: ['./connect-fb-page.component.css']
})
export class ConnectFbPageComponent {
  constructor() { }

  makeFbPageIntegration(): void {
    console.log('makeFbPageIntegration');
  }
}
