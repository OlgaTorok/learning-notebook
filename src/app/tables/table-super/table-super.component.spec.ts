import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSuperComponent } from './table-super.component';

describe('TableSuperComponent', () => {
  let component: TableSuperComponent;
  let fixture: ComponentFixture<TableSuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSuperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
