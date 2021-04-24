import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetahashForgingComponent } from './metahash-forging.component';

describe('MetahashForgingComponent', () => {
  let component: MetahashForgingComponent;
  let fixture: ComponentFixture<MetahashForgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetahashForgingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetahashForgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
