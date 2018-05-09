import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingFooterComponent } from './accounting-footer.component';

describe('AccountingFooterComponent', () => {
  let component: AccountingFooterComponent;
  let fixture: ComponentFixture<AcountingFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
