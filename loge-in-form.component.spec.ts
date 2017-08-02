import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogeInFormComponent } from './loge-in-form.component';

describe('LogeInFormComponent', () => {
  let component: LogeInFormComponent;
  let fixture: ComponentFixture<LogeInFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogeInFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogeInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
