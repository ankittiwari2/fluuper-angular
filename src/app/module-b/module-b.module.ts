import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleBRoutingModule } from './module-b-routing.module';
import { ModuleBComponent } from './module-b.component';
import { ModBCompAComponent } from './componentA/componentA.component';
import { ModBCompBComponent } from './componentB/componentB.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModuleBComponent,
    ModBCompAComponent,
    ModBCompBComponent,
  ],
  imports: [
    CommonModule,
    ModuleBRoutingModule,
    FormsModule
  ]
})
export class ModuleBModule { }
