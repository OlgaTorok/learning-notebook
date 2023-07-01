import { Component } from '@angular/core';
import { periodicData } from '../../../shared/data/periodic';

@Component({
  selector: 'app-table-responsive',
  templateUrl: './table-responsive.component.html',
  styleUrls: ['./table-responsive.component.scss']
})
export class TableResponsiveComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'energy', 'radius', 'discovered', 'series'];
  dataSource = periodicData;

}
