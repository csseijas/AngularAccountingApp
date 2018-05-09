import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingMenuComponent } from './accounting-header.component';

describe('AccountingMenuComponent', () => {
  let component: AccountingMenuComponent;
  let fixture: ComponentFixture<AccountingMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
