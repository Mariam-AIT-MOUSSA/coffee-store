import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeesComponent } from './coffees/coffees.component';

const routes: Routes = [
  {path: 'coffee-list', component: CoffeesComponent},
  {path: '', redirectTo: '/coffee-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
