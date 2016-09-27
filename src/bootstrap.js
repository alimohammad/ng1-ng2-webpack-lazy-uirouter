import { adapter } from './adapter.js';
import { appModule } from 'app';

document.addEventListener('DOMContentLoaded', () => {
  // `adapter['ng2AppModule']` is `app/upgrade.module.js`
  adapter.bootstrap(document.body, [appModule.name]);
});
