import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmapComponent } from './showmap.component';

describe('ShowmapComponent', () => {
  let component: ShowmapComponent;
  let fixture: ComponentFixture<ShowmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
