import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageDescriptionComponent } from './front-page-description.component';

describe('FrontPageDescriptionComponent', () => {
  let component: FrontPageDescriptionComponent;
  let fixture: ComponentFixture<FrontPageDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPageDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
