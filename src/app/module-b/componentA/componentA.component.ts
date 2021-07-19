import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-modB-componentA',
  templateUrl: 'componentA.component.html'
})

export class ModBCompAComponent {
  @Input() valueFromParent: any;
  @Output() valueFromChind = new EventEmitter<boolean>();
  childValue: boolean = false;

  passData() {
    this.childValue = !this.childValue;
    this.valueFromChind.emit(this.childValue);
  }

}
