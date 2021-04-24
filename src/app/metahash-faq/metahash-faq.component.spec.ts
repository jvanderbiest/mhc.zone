import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetahashFaqComponent } from './metahash-faq.component';

describe('MetahashFaqComponent', () => {
  let component: MetahashFaqComponent;
  let fixture: ComponentFixture<MetahashFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetahashFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetahashFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
