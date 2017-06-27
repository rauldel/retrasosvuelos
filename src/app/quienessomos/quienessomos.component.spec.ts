/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuienessomosComponent } from './quienessomos.component';

describe('QuienessomosComponent', () => {
  let component: QuienessomosComponent;
  let fixture: ComponentFixture<QuienessomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuienessomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienessomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
