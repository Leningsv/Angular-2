import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/**Librerias Componentes */
import { Person } from './person.component';
import { Product } from './product.component';
import { Login } from './login.component';
import { Dashboard } from './dashboard.component';
/**Libreria para implementar el Routing */
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'app-myStore',
    template : '<router-outlet></router-outlet>',
    styleUrls: ['./app/bower_components/bootstrap/dist/css/bootstrap.css',
    './app/styles/css/styles.css'],
    directives: [Dashboard,Person,Product,Login,
    ROUTER_DIRECTIVES],
    encapsulation: ViewEncapsulation.None,
})
export class AppMyStore implements OnInit {
    public listPerson = [];
    constructor() { 
        this.listPerson.push('Lenin');
        this.listPerson.push('Juan');
        this.listPerson.push('pedro')
    }
    ngOnInit() { 
    }
}