import { Component } from '@angular/core';
import { ShortElement } from './../../../shared/models/data.model';
import { periodData } from '../../../shared/data/periodic';

@Component({
  selector: 'app-table-changing',
  templateUrl: './table-changing.component.html',
  styleUrls: ['./table-changing.component.scss']
})
export class TableChangingComponent {

  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: ShortElement[] = periodData;

  constructor() { }

  ngOnInit(): void {
  }

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }

}
