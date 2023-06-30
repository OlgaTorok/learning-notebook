export interface Cell {
  header1: string,
  header2: string,
  header3: string,
  header4: string,
  header5: string,
  header6: string,
  header7: string,
  header8: string,
}

export interface TableTemplate {
  header1: string,
  header2: string,
  header3: string,
  header4: string,
  header5: string,
  header6: string,
  header7: string,
  header8: string,
  complete: boolean,
}

export interface Color {
  id: number;
  color: string;
  value: string;
  complimentary: string;
  monochromatic: string;
  analog1: string;
  analog2: string;
  triadic1: string;
  triadic2: string;
  tetradic1: string;
  tetradic2: string;
  tetradic3: string;
}

export interface Element {
  name: string,
  position: number,
  weight: number,
  symbol: string,
  energy: string,
  radius: number,
  discovered: string,
  series: string
}

export interface ShortElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}
