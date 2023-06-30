import { Component } from '@angular/core';
import { Color } from './../../../shared/models/data.model';
import { data } from '../../../shared/data/colors';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  displayedColumns = ['id', 'color', 'value', 'complimentary', 'monochromatic', 'analog1', 'analog2', 'triadic1', 'triadic2', 'tetradic1', 'tetradic2', 'tetradic3'];
  dataSource: Color[] = data;

}
