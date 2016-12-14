/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndexloggedComponent } from './indexlogged.component';

describe('IndexloggedComponent', () => {
  let component: IndexloggedComponent;
  let fixture: ComponentFixture<IndexloggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexloggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
