import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallsubComponent } from './viewallsub.component';

describe('ViewallsubComponent', () => {
  let component: ViewallsubComponent;
  let fixture: ComponentFixture<ViewallsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
