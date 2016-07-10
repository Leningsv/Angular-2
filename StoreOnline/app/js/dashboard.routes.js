"use strict";
/**Importacion Childrens */
var dashboard_component_1 = require('./dashboard.component'); //Padre
var person_component_1 = require('./person.component'); //Hijo
var product_component_1 = require('./product.component'); //Hijo
exports.DashboardRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.Dashboard,
        children: [
            { path: '', component: person_component_1.Person },
            { path: 'product', component: product_component_1.Product }
        ]
    }
];
//# sourceMappingURL=dashboard.routes.js.map