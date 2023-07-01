import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LearnNgComponent } from './learn/learn-ng/learn-ng.component';
import { LearnReactComponent } from './learn/learn-react/learn-react.component';
import { TableComponent } from './tables/table/table.component';
import { TableChangingComponent } from './tables/table-changing/table-changing.component';
import { TableExpandableComponent } from './tables/table-expandable/table-expandable.component';
import { TableHiddenColsComponent } from './tables/table-hidden-cols/table-hidden-cols.component';
import { TableOrderComponent } from './tables/table-order/table-order.component';
import { TableResponsiveComponent } from './tables/table-responsive/table-responsive.component';
import { TableSuperComponent } from './tables/table-super/table-super.component';

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
  {
    path: 'table-expanded',
    component: TableExpandableComponent,
  },
  {
    path: 'table-hidden',
    component: TableHiddenColsComponent,
  },
  {
    path: 'table-reorder',
    component: TableOrderComponent,
  },
  {
    path: 'table-responsive',
    component: TableResponsiveComponent,
  },
  {
    path: 'table-super',
    component: TableSuperComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
