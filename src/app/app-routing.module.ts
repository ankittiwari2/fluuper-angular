import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'routeA',
    loadChildren: () =>
      import('./module-a/module-a.module').then((m) => m.ModuleAModule),
  },
  {
    path: 'routeB',
    loadChildren: () =>
      import('./module-b/module-b.module').then((m) => m.ModuleBModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
