"use strict";
/**Importacion librerias para el routing */
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
/**Importacion librerias routing avanzado */
var dashboard_routes_1 = require('./dashboard.routes');
exports.routes = [
    { path: '', component: login_component_1.Login }
].concat(dashboard_routes_1.DashboardRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=myStore.routes.js.map