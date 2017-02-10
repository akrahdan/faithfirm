/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PicksComponent } from './picks.component';

describe('PicksComponent', () => {
  let component: PicksComponent;
  let fixture: ComponentFixture<PicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});