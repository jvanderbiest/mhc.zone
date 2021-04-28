import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetahashSocialComponent } from './metahash-social.component';

describe('MetahashSocialComponent', () => {
  let component: MetahashSocialComponent;
  let fixture: ComponentFixture<MetahashSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetahashSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetahashSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
