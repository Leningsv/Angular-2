import { provideRouter, RouterConfig } from '@angular/router';
import { Login }  from './login.component';
import { Dashboard } from './dashboard.component';
//import { HeroListComponent }    from './hero-list.component';
export const routes: RouterConfig = [
  { path: '', component: Login },
  { path: 'dashboard', component: Dashboard }
  //{ path: 'heroes', component: HeroListComponent }
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];