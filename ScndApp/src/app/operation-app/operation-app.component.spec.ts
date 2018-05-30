import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationAppComponent } from './operation-app.component';

describe('OperationAppComponent', () => {
  let component: OperationAppComponent;
  let fixture: ComponentFixture<OperationAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
