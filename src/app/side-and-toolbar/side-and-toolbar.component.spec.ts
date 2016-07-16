/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SideAndToolbarComponent } from './side-and-toolbar.component';

describe('Component: SideAndToolbar', () => {
  it('should create an instance', () => {
    let component = new SideAndToolbarComponent();
    expect(component).toBeTruthy();
  });
});