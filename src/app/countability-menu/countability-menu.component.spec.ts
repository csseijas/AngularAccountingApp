import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountabilityMenuComponent } from './countability-menu.component';

describe('CountabilityMenuComponent', () => {
  let component: CountabilityMenuComponent;
  let fixture: ComponentFixture<CountabilityMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountabilityMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountabilityMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
