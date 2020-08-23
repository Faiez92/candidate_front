import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandFormComponent } from './cand-form.component';

describe('CandFormComponent', () => {
  let component: CandFormComponent;
  let fixture: ComponentFixture<CandFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
