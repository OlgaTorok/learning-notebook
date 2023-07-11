import { Component, OnInit } from '@angular/core';
import { devices2 } from 'src/shared/data/heatmap';
import { readableColor } from 'color2k';

@Component({
  selector: 'app-heatmap-table-rgb',
  templateUrl: './heatmap-table-rgb.component.html',
  styleUrls: ['./heatmap-table-rgb.component.scss']
})
export class HeatmapTableRgbComponent implements OnInit {

  dataSource = devices2;
  dataset: any = [];

  boundary: any = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0
  }

  lowBoundary: number = 0;
  highBoundary: number = 0;

  colourStops = [
    { value: 0, color: '' },
    { value: 0, color: '' }
  ];

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

  getColourGradients(value: number) {
    let textColour = '';
    let bgColour = '';

    const length = this.dataset.length;

    const first = Math.round((10 / 100) * length);
    const third = Math.round((90 / 100) * length);
    this.lowBoundary = this.dataset[first - 1];
    this.highBoundary = this.dataset[third - 1];

    if (value <= this.lowBoundary) {
      this.colourStops = [
        { value: this.dataset[0], color: '#2171b5' },
        { value: this.lowBoundary, color: '#bdd7e7' }
      ];
    }
    else if (value > this.lowBoundary && value <= this.highBoundary) {
      this.colourStops = [
        { value: this.lowBoundary + 1, color: '#e56303' },
        { value: this.highBoundary, color: '#FF9505' }
      ];
    }
    else {
      this.colourStops = [
        { value: this.highBoundary + 1, color: '#FFAC25' },
        { value: this.dataset[length - 1], color: '#FFC971' }
      ];
    }
    bgColour = this.getGradient(value);
    textColour = readableColor(bgColour);

    return {
      background: bgColour,
      color: textColour,
    };
  }

  getGradient(value: number): string {
    const colourStops = this.colourStops;

    let colorStopIndex = 0;
    while (colorStopIndex < colourStops.length - 1 && value > colourStops[colorStopIndex + 1].value) {
      colorStopIndex++;
    }

    const startStop = colourStops[colorStopIndex];
    const endStop = colourStops[colorStopIndex + 1];
    const ratio = (value - startStop.value) / (endStop.value - startStop.value);

    const startColor = startStop.color;
    const endColor = endStop.color;
    const interpolatedColor = this.interpolateColor(startColor, endColor, ratio);

    return interpolatedColor;
  }

  interpolateColor(startColor: string, endColor: string, ratio: number): string {
    const startRGB = this.hexToRGB(startColor);
    const endRGB = this.hexToRGB(endColor);

    const r = Math.round(startRGB.r + (endRGB.r - startRGB.r) * ratio);
    const g = Math.round(startRGB.g + (endRGB.g - startRGB.g) * ratio);
    const b = Math.round(startRGB.b + (endRGB.b - startRGB.b) * ratio);

    return this.rgbToHex(r, g, b);
  }

  hexToRGB(hex: string): { r: number; g: number; b: number } {
    const parsedHex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(parsedHex);

    if (!result) {
      throw new Error(`Invalid hex color: ${hex}`);
    }

    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    };
  }

  rgbToHex(r: number, g: number, b: number): string {
    return `#${this.componentToHex(r)}${this.componentToHex(g)}${this.componentToHex(b)}`;
  }

  componentToHex(c: number): string {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

}
