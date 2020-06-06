import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfaqComponent } from './addfaq.component';

describe('AddfaqComponent', () => {
  let component: AddfaqComponent;
  let fixture: ComponentFixture<AddfaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
