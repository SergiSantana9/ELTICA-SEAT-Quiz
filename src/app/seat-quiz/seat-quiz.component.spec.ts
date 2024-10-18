import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatQuizComponent } from './seat-quiz.component';

describe('SeatQuizComponent', () => {
  let component: SeatQuizComponent;
  let fixture: ComponentFixture<SeatQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatQuizComponent]
    });
    fixture = TestBed.createComponent(SeatQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
