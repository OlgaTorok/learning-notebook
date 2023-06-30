import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnReactComponent } from './learn-react.component';

describe('LearnReactComponent', () => {
  let component: LearnReactComponent;
  let fixture: ComponentFixture<LearnReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnReactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
