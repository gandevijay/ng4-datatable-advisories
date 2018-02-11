import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoriesComponent } from './advisories.component';

describe('AdvisoriesComponent', () => {
  let component: AdvisoriesComponent;
  let fixture: ComponentFixture<AdvisoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
