import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LearnNgComponent } from './learn/learn-ng/learn-ng.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'learn-ng',
    component: LearnNgComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
