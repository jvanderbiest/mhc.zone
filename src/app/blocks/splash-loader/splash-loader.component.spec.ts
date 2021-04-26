import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashLoaderComponent } from './splash-loader.component';

describe('SplashLoaderComponent', () => {
  let component: SplashLoaderComponent;
  let fixture: ComponentFixture<SplashLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
