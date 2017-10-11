import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MibrahimComponent } from './mibrahim.component';

describe('MibrahimComponent', () => {
  let component: MibrahimComponent;
  let fixture: ComponentFixture<MibrahimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MibrahimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MibrahimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
