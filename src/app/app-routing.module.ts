import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicksComponent } from './picks/picks.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'top',
    component: PicksComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class FARoutingModule { 

}
