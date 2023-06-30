import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

import { LearnNgComponent } from './learn/learn-ng/learn-ng.component';
import { LearnReactComponent } from './learn/learn-react/learn-react.component';
import { TableComponent } from './tables/table/table.component';
import { TableChangingComponent } from './tables/table-changing/table-changing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearnNgComponent,
    LearnReactComponent,
    TableComponent,
    TableChangingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatMenuModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
