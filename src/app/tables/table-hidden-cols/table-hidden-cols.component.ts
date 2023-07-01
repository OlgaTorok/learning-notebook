import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, merge, of } from 'rxjs';
import { TableTemplate } from './../../../shared/models/data.model';
import { data } from '../../../shared/data/headers';

@Component({
  selector: 'app-table-hidden-cols',
  templateUrl: './table-hidden-cols.component.html',
  styleUrls: ['./table-hidden-cols.component.scss']
})
export class TableHiddenColsComponent implements OnInit {

  form: FormGroup = new FormGroup({
    header1: new FormControl(true),
    header2: new FormControl(true),
    header3: new FormControl(true),
    header4: new FormControl(true),
    header5: new FormControl(true),
    header6: new FormControl(true),
    header7: new FormControl(true),
    header8: new FormControl(true),
  });

  header1 = this.form.get('header1');
  header2 = this.form.get('header2');
  header3 = this.form.get('header3');
  header4 = this.form.get('header4');
  header5 = this.form.get('header5');
  header6 = this.form.get('header6');
  header7 = this.form.get('header7');
  header8 = this.form.get('header8');
  /**
   * Control column ordering and which columns are displayed.
   */
  columns = [
    { def: 'header1', label: 'Header 1', cb: this.header1 },
    { def: 'header2', label: 'Header 2', cb: this.header2 },
    { def: 'header3', label: 'Header 3', cb: this.header3 },
    { def: 'header4', label: 'Header 4', cb: this.header4 },
    { def: 'header5', label: 'Header 5', cb: this.header5 },
    { def: 'header6', label: 'Header 6', cb: this.header6 },
    { def: 'header7', label: 'Header 7', cb: this.header7 },
    { def: 'header8', label: 'Header 8', cb: this.header8 },
  ];

  constructor() {
    this.dataSource = new MatTableDataSource(data);
    merge(
      this.header1!.valueChanges,
      this.header2!.valueChanges,
      this.header3!.valueChanges,
      this.header4!.valueChanges,
      this.header5!.valueChanges,
      this.header6!.valueChanges,
      this.header7!.valueChanges,
      this.header8!.valueChanges).subscribe(() => {
        this.displayedColumns$ = of(this.columns.filter(c => c.cb?.value).map(c => c.def));
      });
  }

  ngOnInit(): void { }

  displayedColumns$: Observable<string[]> = of(this.columns.map(c => c.def));
  dataSource: MatTableDataSource<TableTemplate>;

}
