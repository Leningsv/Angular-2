"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/**Librerias Componentes */
var person_component_1 = require('./person.component');
var product_component_1 = require('./product.component');
var login_component_1 = require('./login.component');
var dashboard_component_1 = require('./dashboard.component');
/**Libreria para implementar el Routing */
var router_1 = require('@angular/router');
var AppMyStore = (function () {
    function AppMyStore() {
        this.listPerson = [];
        this.listPerson.push('Lenin');
        this.listPerson.push('Juan');
        this.listPerson.push('pedro');
    }
    AppMyStore.prototype.ngOnInit = function () {
    };
    AppMyStore = __decorate([
        core_1.Component({
            selector: 'app-myStore',
            templateUrl: './app/templates/appMyStore.component.html',
            styleUrls: ['./app/bower_components/bootstrap/dist/css/bootstrap.css',
                './app/styles/css/styles.css'],
            directives: [dashboard_component_1.Dashboard, person_component_1.Person, product_component_1.Product, login_component_1.Login,
                router_1.ROUTER_DIRECTIVES],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [])
    ], AppMyStore);
    return AppMyStore;
}());
exports.AppMyStore = AppMyStore;
//# sourceMappingURL=myStore.component.js.map