import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FbPageService {

  constructor() { }
  
  connectionStatus: boolean = true;
  integratedPageName: string = "Amazon Prime";
}
