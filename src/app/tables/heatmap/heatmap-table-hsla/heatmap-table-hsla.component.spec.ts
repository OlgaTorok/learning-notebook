import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapTableHslaComponent } from './heatmap-table-hsla.component';

describe('HeatmapTableHslaComponent', () => {
  let component: HeatmapTableHslaComponent;
  let fixture: ComponentFixture<HeatmapTableHslaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatmapTableHslaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatmapTableHslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
