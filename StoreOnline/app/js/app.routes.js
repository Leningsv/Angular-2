"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var dashboard_component_1 = require('./dashboard.component');
//import { HeroListComponent }    from './hero-list.component';
exports.routes = [
    { path: '', component: login_component_1.Login },
    { path: 'dashboard', component: dashboard_component_1.Dashboard },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map