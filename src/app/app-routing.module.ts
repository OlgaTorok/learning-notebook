import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LearnNgComponent } from './learn/learn-ng/learn-ng.component';
import { LearnReactComponent } from './learn/learn-react/learn-react.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'learn-ng',
    component: LearnNgComponent,
  },
  {
    path: 'learn-react',
    component: LearnReactComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
