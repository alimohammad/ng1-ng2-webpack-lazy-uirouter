import angular from 'angular';
import { MAIN_STATES } from '../app/states.js';

export function configRouting(
  $locationProvider,
  $stateProvider,
  $urlMatcherFactoryProvider,
  $urlRouterProvider) {

  $locationProvider.html5Mode({
    enabled: true
  });

  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlMatcherFactoryProvider.strictMode(false);

  $urlRouterProvider.when('', function($state){
    $state.go('login');
  });

  MAIN_STATES.forEach(state => $stateProvider.state(state));
  
};
