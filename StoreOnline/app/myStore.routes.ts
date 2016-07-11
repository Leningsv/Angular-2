/**Importacion librerias para el routing */
import { provideRouter, RouterConfig } from '@angular/router';
import { Login }  from './login.component';
import { Dashboard } from './dashboard.component';
/**Importacion librerias routing avanzado */
import { DashboardRoutes } from './dashboard.routes';
export const routes: RouterConfig = [
  { path: '', component: Login },
  /**Path ruteo chidren */
  ... DashboardRoutes
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];