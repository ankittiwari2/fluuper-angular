import { Component } from "@angular/core";
import { GlobalService } from "src/app/global.service";

@Component({
    selector: 'app-comp-b',
    templateUrl: 'comp-b.component.html'
})

export class CompBComponent {
  globalValue: boolean | undefined;

  constructor(private _globalService:GlobalService) {}

  getValue() {
    this.globalValue = this._globalService.getBooleanValue()
  }

}
