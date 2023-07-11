import { Component } from '@angular/core';
import { devices } from 'src/shared/data/heatmap';
import { readableColor, hsla, parseToHsla } from 'color2k';

@Component({
  selector: 'app-heatmap-table-hsla',
  templateUrl: './heatmap-table-hsla.component.html',
  styleUrls: ['./heatmap-table-hsla.component.scss']
})
export class HeatmapTableHslaComponent {

  dataSource = devices;
  dataset: any = [];
  highestValue: number = 0;
  bgColour: string = '#4180b4';

  displayedColumns: string[] = [
    'Name',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  getHslaColour(value: number) {
    let bgColour = '';
    let textColour = '';

    this.dataSource.forEach((x: any, i: number) => {
      this.dataset.push(x.Jan, x.Feb, x.Mar, x.Apr, x.May, x.Jun, x.Jul, x.Aug, x.Sep, x.Oct, x.Nov, x.Dec);
    });

    this.highestValue = this.dataset[this.dataset.length - 1];

    if (this.bgColour) {
      const [h, s, l, a] = parseToHsla(this.bgColour);
      const maxLightness = 1 - l;
      const percentage = (value * maxLightness) / this.highestValue;
      const lightness = +percentage.toFixed(3);
      bgColour = hsla(h, s, 1 - lightness, a);
      textColour = readableColor(bgColour);
    }

    return {
      background: bgColour,
      color: textColour,
    };
  }

}
