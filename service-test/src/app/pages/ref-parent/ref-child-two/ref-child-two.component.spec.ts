import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefChildTwoComponent } from './ref-child-two.component';

describe('RefChildTwoComponent', () => {
  let component: RefChildTwoComponent;
  let fixture: ComponentFixture<RefChildTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefChildTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
