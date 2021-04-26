import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetahashBuyComponent } from './metahash-buy.component';

describe('MetahashBuyComponent', () => {
  let component: MetahashBuyComponent;
  let fixture: ComponentFixture<MetahashBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetahashBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetahashBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
