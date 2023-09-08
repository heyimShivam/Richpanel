import { Component } from '@angular/core';
import { FbPageService } from './service/fb-page.service';

@Component({
  selector: 'richpannel-facebook-page',
  templateUrl: './facebook-page.component.html',
  styleUrls: ['./facebook-page.component.css']
})
export class FacebookPageComponent {
  constructor(
    private fbPageService: FbPageService,
  ) {}

  connectDisconnectSwitch: boolean = this.fbPageService.connectionStatus;
  integratedPageName: string = this.fbPageService.integratedPageName;
}
