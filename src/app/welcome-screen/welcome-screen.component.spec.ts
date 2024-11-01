import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeScreenComponent } from './welcome-screen.component';

describe('SplashScreenComponent', () => {
  let component: SplashScreenComponent;
  let fixture: ComponentFixture<SplashScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplashScreenComponent]
    });
    fixture = TestBed.createComponent(SplashScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
