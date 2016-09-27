import angular from 'angular';
import { configRouting } from 'utils';
import { commonModule } from 'app/common';

export const appModule = angular
  .module('app', [
    'ui.router',
    'ui.router.state.events',
    'ui.router.upgrade',
    'oc.lazyLoad',
    commonModule.name
  ])
  .config(configRouting);
