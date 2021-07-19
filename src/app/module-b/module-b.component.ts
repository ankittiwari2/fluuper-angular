import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-b',
  templateUrl: './module-b.component.html',
  styleUrls: ['./module-b.component.css']
})
export class ModuleBComponent implements OnInit {
  parentValue: boolean = false;
  valueFromChild: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeValue() {
    this.parentValue = !this.parentValue;
  }

  printValueFromChild(_event: boolean) {
    this.valueFromChild = _event;
  }

}
