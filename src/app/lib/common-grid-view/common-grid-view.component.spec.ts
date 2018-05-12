import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonGridViewComponent } from './common-grid-view.component';

describe('CommonGridViewComponent', () => {
  let component: CommonGridViewComponent;
  let fixture: ComponentFixture<CommonGridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonGridViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
