/**Clase para implementar el routing avanzado. */
import { RouterConfig } from '@angular/router';
/**Importacion Childrens */
import { Dashboard } from './dashboard.component'; //Padre
import { Person } from './person.component'; //Hijo
import { Product } from './product.component'; //Hijo

export const DashboardRoutes: RouterConfig = [
    {
        path: 'dashboard',
        component: Dashboard,
        children: [
            { path: '',  component: Person },
            { path: 'product',     component: Product }
        ]
    }
];