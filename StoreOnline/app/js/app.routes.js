"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var dashboard_routes_1 = require('./dashboard.routes');
exports.routes = [
    { path: '', component: login_component_1.Login }
].concat(dashboard_routes_1.DashboardRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map