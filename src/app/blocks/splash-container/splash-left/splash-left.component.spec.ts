import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashLeftComponent } from './splash-left.component';

describe('SplashLeftComponent', () => {
  let component: SplashLeftComponent;
  let fixture: ComponentFixture<SplashLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
