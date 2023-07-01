import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { LearnNgComponent } from './learn/learn-ng/learn-ng.component';
import { LearnReactComponent } from './learn/learn-react/learn-react.component';
import { TableComponent } from './tables/table/table.component';
import { TableChangingComponent } from './tables/table-changing/table-changing.component';
import { TableExpandableComponent } from './tables/table-expandable/table-expandable.component';
import { TableHiddenColsComponent } from './tables/table-hidden-cols/table-hidden-cols.component';
import { TableOrderComponent } from './tables/table-order/table-order.component';
import { TableResponsiveComponent } from './tables/table-responsive/table-responsive.component';
import { TableSuperComponent } from './tables/table-super/table-super.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearnNgComponent,
    LearnReactComponent,
    TableComponent,
    TableChangingComponent,
    TableExpandableComponent,
    TableHiddenColsComponent,
    TableOrderComponent,
    TableResponsiveComponent,
    TableSuperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
