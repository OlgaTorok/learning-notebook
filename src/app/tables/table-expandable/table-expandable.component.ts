import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PeriodicElement } from './../../../shared/models/data.model';
import { data } from '../../../shared/data/elements';

@Component({
  selector: 'app-table-expandable',
  templateUrl: './table-expandable.component.html',
  styleUrls: ['./table-expandable.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableExpandableComponent {
  dataSource = data;
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: PeriodicElement | undefined;

}
