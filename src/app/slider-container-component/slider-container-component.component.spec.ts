import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderContainerComponentComponent } from './slider-container-component.component';

describe('SliderContainerComponentComponent', () => {
  let component: SliderContainerComponentComponent;
  let fixture: ComponentFixture<SliderContainerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderContainerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
