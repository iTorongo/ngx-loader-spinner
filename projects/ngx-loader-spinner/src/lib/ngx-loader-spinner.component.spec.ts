import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoaderSpinnerComponent } from './ngx-loader-spinner.component';

describe('NgxLoaderSpinnerComponent', () => {
  let component: NgxLoaderSpinnerComponent;
  let fixture: ComponentFixture<NgxLoaderSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLoaderSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoaderSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
