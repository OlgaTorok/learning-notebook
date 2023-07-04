import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeatmapComponent } from './table-heatmap.component';

describe('TableHeatmapComponent', () => {
  let component: TableHeatmapComponent;
  let fixture: ComponentFixture<TableHeatmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHeatmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
