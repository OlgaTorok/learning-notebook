import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapTableCustomComponent } from './heatmap-table-custom.component';

describe('HeatmapTableCustomComponent', () => {
  let component: HeatmapTableCustomComponent;
  let fixture: ComponentFixture<HeatmapTableCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatmapTableCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatmapTableCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
