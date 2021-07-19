import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { ModuleAComponent } from './module-a.component';

const routes: Routes = [
  {
  path: '',
  component: ModuleAComponent,

  children: [
    { path: '', redirectTo: 'moduleAComponentA', pathMatch: 'full' },
      { path: 'moduleAComponentA', component: CompAComponent },
      { path: 'moduleAComponentB', component: CompBComponent },
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleARoutingModule { }
