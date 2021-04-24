import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashRightComponent } from './splash-right.component';

describe('SplashRightComponent', () => {
  let component: SplashRightComponent;
  let fixture: ComponentFixture<SplashRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
