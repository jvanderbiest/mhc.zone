import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetahashWhyComponent } from './metahash-why.component';

describe('MetahashWhyComponent', () => {
  let component: MetahashWhyComponent;
  let fixture: ComponentFixture<MetahashWhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetahashWhyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetahashWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
