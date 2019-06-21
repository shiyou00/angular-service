import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefChildOneComponent } from './ref-child-one.component';

describe('RefChildOneComponent', () => {
  let component: RefChildOneComponent;
  let fixture: ComponentFixture<RefChildOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefChildOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
