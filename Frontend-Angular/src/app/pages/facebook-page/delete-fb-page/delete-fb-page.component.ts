import { Component } from '@angular/core';
import { FbPageService } from '../service/fb-page.service';

@Component({
  selector: 'richpannel-delete-fb-page',
  templateUrl: './delete-fb-page.component.html',
  styleUrls: ['./delete-fb-page.component.css']
})
export class DeleteFbPageComponent {
  constructor(
    private fbPageService: FbPageService,
  ) {}

  connectDisconnectSwitch: boolean = this.fbPageService.connectionStatus;
  integratedPageName: string = this.fbPageService.integratedPageName;

  deleteIntegration() :void {
    console.log("Integration Deleted");
  }
}
