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
/**View encapsulartion sirve para que todos los componentes utilizen los mismo css */
var core_1 = require('@angular/core');
var myMovies_component_1 = require('./myMovies.component');
var myPeople_component_1 = require('./myPeople.component');
var AppMyShop = (function () {
    function AppMyShop() {
        this.nameIf = true;
        this.movieList = [
            'Batman vs Superman',
            'Civil War',
            'Harry Potter',
            'Wordl of Warcraft'
        ];
    }
    AppMyShop = __decorate([
        core_1.Component({
            selector: 'app-myShop',
            templateUrl: "app/views/myShop.component.html",
            directives: [myMovies_component_1.AppMyMovies, myPeople_component_1.AppMyPeople],
            styleUrls: ["bower_components/bootstrap/dist/css/bootstrap.css"],
            /**View Encapsulation */
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], AppMyShop);
    return AppMyShop;
}());
exports.AppMyShop = AppMyShop;
//# sourceMappingURL=myShop.component.js.map