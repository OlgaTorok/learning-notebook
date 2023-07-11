import { Component, OnInit } from '@angular/core';
import { devices2 } from 'src/shared/data/heatmap';

@Component({
  selector: 'app-heatmap-table-custom',
  templateUrl: './heatmap-table-custom.component.html',
  styleUrls: ['./heatmap-table-custom.component.scss']
})
export class HeatmapTableCustomComponent implements OnInit {

  dataSource = devices2;
  dataset: any = [];

  boundary: any = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0
  }

  colours: any = {
    first: '#cc5803',
    second: '#e2711d',
    third: '#ff9505',
    fourth: '#ffb627'
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

  getOutliers() {
    this.dataSource.forEach((x: any) => {
      this.dataset.push(x.Jan, x.Feb, x.Mar, x.Apr, x.May, x.Jun, x.Jul, x.Aug, x.Sep, x.Oct, x.Nov, x.Dec);
    });
    this.dataset.sort(function (a: any, b: any) { return a - b });

    const first = Math.round((20 / 100) * this.dataset.length);
    const second = Math.round((40 / 100) * this.dataset.length);
    const third = Math.round((60 / 100) * this.dataset.length);
    const fourth = Math.round((80 / 100) * this.dataset.length);

    this.boundary.first = this.dataset[first - 1];
    this.boundary.second = this.dataset[second - 1];
    this.boundary.third = this.dataset[third - 1];
    this.boundary.fourth = this.dataset[fourth - 1];
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

    textColour = firstOutlier ? '#FFFFFF' : '';

    return {
      background: bgColour,
      color: textColour,
    };
  }

}
