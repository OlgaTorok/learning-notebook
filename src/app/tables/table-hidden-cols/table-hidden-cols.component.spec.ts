import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHiddenColsComponent } from './table-hidden-cols.component';

describe('TableHiddenColsComponent', () => {
  let component: TableHiddenColsComponent;
  let fixture: ComponentFixture<TableHiddenColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHiddenColsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHiddenColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
