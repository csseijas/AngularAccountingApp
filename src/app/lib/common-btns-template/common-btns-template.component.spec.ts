import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBtnsTemplateComponent } from './common-btns-template.component';

describe('CommonBtnsTemplateComponent', () => {
  let component: CommonBtnsTemplateComponent;
  let fixture: ComponentFixture<CommonBtnsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonBtnsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonBtnsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
