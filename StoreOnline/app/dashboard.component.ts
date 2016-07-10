import { Component, OnInit } from '@angular/core';
/**Importacion Routing */
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './app/templates/dashboard.component.html',
    directives: [ROUTER_DIRECTIVES],
})
export class Dashboard implements OnInit {
    constructor() { }
    ngOnInit() { 
    }
}