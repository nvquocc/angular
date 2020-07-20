import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompopentComponent } from './test-compopent.component';

describe('TestCompopentComponent', () => {
  let component: TestCompopentComponent;
  let fixture: ComponentFixture<TestCompopentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCompopentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCompopentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
