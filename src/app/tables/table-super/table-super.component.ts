import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { orderData } from '../../../shared/data/order';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';


@Component({
  selector: 'app-table-super',
  templateUrl: './table-super.component.html',
  styleUrls: ['./table-super.component.scss']
})
export class TableSuperComponent {
  columns = ['header1', 'header2', 'header3', 'header4', 'header5', 'header6', 'header7', 'header8'];
  widths = ['*', '*', '*', '*', '*', '*', '*', '*'];
  dataSource = orderData;
  pdfMake: any;

  constructor() { (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs; }

  ngOnInit(): void { }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  generatePdf() {

    const createPdf = {
      content: [
        { text: 'Simple Table', style: 'header' },

        {
          layout: 'lightHorizontalLines',
          table: {
            headerRows: 1,
            widths: this.widths,

            body: [
              ['header1', 'header2', 'header3', 'header4', 'header5', 'header6', 'header7', 'header8'],
              ...this.dataSource.map(x => { return [x.header1, x.header2, x.header3, x.header4, x.header5, x.header6, x.header7, x.header8] })
            ]
          }
        }
      ],
      styles: {
        header: {
          fontSize: 23,
          bold: true,
          color: '#455a64',
          lineHeight: 2,
        }
      }
    };

    pdfMake.createPdf(createPdf).open();
  }
}
