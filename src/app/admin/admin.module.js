import angular from 'angular';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from 'ui-router-ng2';

import { ADMIN_STATES } from './admin.state.js';
import { AdminComponent } from './admin.component.js';
import { ResetComponent } from './reset/reset.component.js';

@UIRouterModule({
  imports: [BrowserModule],
  declarations: [AdminComponent, ResetComponent],
  states: ADMIN_STATES
})
export class AdminModule { }