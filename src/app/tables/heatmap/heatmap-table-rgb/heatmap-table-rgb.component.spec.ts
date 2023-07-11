import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapTableRgbComponent } from './heatmap-table-rgb.component';

describe('HeatmapTableRgbComponent', () => {
  let component: HeatmapTableRgbComponent;
  let fixture: ComponentFixture<HeatmapTableRgbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatmapTableRgbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatmapTableRgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
