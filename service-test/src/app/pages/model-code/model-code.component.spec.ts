import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCodeComponent } from './model-code.component';

describe('ModelCodeComponent', () => {
  let component: ModelCodeComponent;
  let fixture: ComponentFixture<ModelCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
