import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentControlComponent } from './content-control.component';

describe('ContentControlComponent', () => {
  let component: ContentControlComponent;
  let fixture: ComponentFixture<ContentControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
