import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChangingComponent } from './table-changing.component';

describe('TableChangingComponent', () => {
  let component: TableChangingComponent;
  let fixture: ComponentFixture<TableChangingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableChangingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableChangingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
