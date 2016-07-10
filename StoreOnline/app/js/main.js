"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var myStore_component_1 = require('./myStore.component');
//Importado Librerias para el Routing
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(myStore_component_1.AppMyStore, [
    app_routes_1.APP_ROUTER_PROVIDERS
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map