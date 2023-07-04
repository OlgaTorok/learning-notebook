import { Component, OnInit } from '@angular/core';
import { devices, devices2 } from './../..//../shared/data/heatmap';
import { readableColor, toHex, hsla, parseToHsla } from 'color2k';

@Component({
  selector: 'app-table-heatmap',
  templateUrl: './table-heatmap.component.html',
  styleUrls: ['./table-heatmap.component.scss']
})
export class TableHeatmapComponent implements OnInit {
  dataSource = devices;
  dataset: any = [];
  bgColour: string = '#4180b4';
  highestValue: number = 0;


  dataSource2 = devices2;
  dataset2: any = [];
  rows: any = [];
  boundary: any = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0
  }
  colours: any = {
    first: '#ffb627',
    second: '#ff9505',
    third: '#e2711d',
    fourth: '#cc5803'
  }

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

  constructor() { }

  ngOnInit(): void {
    this.getOutliers();
  }

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

  getOutliers() {
    this.dataSource2.forEach((x: any) => {
      this.dataset2.push(x.Jan, x.Feb, x.Mar, x.Apr, x.May, x.Jun, x.Jul, x.Aug, x.Sep, x.Oct, x.Nov, x.Dec);
    });

    this.dataset2.sort(function (a: any, b: any) { return a - b });

    const first = Math.round((20 / 100) * this.dataset2.length);
    const second = Math.round((40 / 100) * this.dataset2.length);
    const third = Math.round((69 / 100) * this.dataset2.length);
    const fourth = Math.round((80 / 100) * this.dataset2.length);

    this.boundary.first = this.dataset2[first - 1];
    this.boundary.second = this.dataset2[second - 1];
    this.boundary.third = this.dataset2[third - 1];
    this.boundary.fourth = this.dataset2[fourth - 1];
  }

  getColour(value: number) {
    let bgColour = '';
    let textColour = '';

    const firstOutlier = value < this.boundary.first;
    const secondOutlier = value >= this.boundary.first && value < this.boundary.third;
    const thirdOutlier = value >= this.boundary.third && value <= this.boundary.fourth;


    bgColour =
      firstOutlier ? this.colours.first :
        secondOutlier ? this.colours.second :
          thirdOutlier ? this.colours.third : this.colours.fourth;

    textColour = readableColor(bgColour);

    return {
      background: bgColour,
      color: textColour,
    };
  }


}
