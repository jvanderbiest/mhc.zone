import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetahashWalletComponent } from './metahash-wallet.component';

describe('MetahashWalletComponent', () => {
  let component: MetahashWalletComponent;
  let fixture: ComponentFixture<MetahashWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetahashWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetahashWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
