import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefParentComponent } from './ref-parent.component';

describe('RefParentComponent', () => {
  let component: RefParentComponent;
  let fixture: ComponentFixture<RefParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
