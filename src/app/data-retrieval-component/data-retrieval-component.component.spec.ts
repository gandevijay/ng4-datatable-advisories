import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRetrievalComponentComponent } from './data-retrieval-component.component';

describe('DataRetrievalComponentComponent', () => {
  let component: DataRetrievalComponentComponent;
  let fixture: ComponentFixture<DataRetrievalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataRetrievalComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRetrievalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
