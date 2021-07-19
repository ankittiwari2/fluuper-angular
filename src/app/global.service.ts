import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  currentVal: any;

  constructor() { }

  changeBoolValue(value: any) {
    this.currentVal = value;
  }

  getBooleanValue() {
    return this.currentVal;
  }


}
