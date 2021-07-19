import { Component } from "@angular/core";
import { GlobalService } from "src/app/global.service";

@Component({
    selector: 'app-comp-a',
    templateUrl: 'comp-a.component.html'
})

export class CompAComponent {
  setBooleanValue: boolean = false;

  constructor(private _globalService:GlobalService) {}

  setValue() {
    this.setBooleanValue = !this.setBooleanValue;
    this._globalService.changeBoolValue(this.setBooleanValue);
  }

}
