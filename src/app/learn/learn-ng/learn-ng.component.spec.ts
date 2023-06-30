import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnNgComponent } from './learn-ng.component';

describe('LearnNgComponent', () => {
  let component: LearnNgComponent;
  let fixture: ComponentFixture<LearnNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnNgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
