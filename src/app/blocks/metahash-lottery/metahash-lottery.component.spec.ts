import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetahashLotteryComponent } from './metahash-lottery.component';

describe('MetahashLotteryComponent', () => {
  let component: MetahashLotteryComponent;
  let fixture: ComponentFixture<MetahashLotteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetahashLotteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetahashLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
