import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LearnNgComponent } from './learn/learn-ng/learn-ng.component';
import { LearnReactComponent } from './learn/learn-react/learn-react.component';
import { TableComponent } from './tables/table/table.component';
import { TableChangingComponent } from './tables/table-changing/table-changing.component';


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
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'table-changing',
    component: TableChangingComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
