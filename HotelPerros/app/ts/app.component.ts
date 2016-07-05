import {Component} from 'angular2/core';
import {Dog} from './dog';
import {Dogs} from './dog.component'

@Component({
    selector: 'my-app',
    templateUrl : `app/ts/login.component.html` 
    //template: '<h1>Angular 2 Template</h1>'
})

export class AppComponent {
    dogs: Array<Dog>;
    constructor(){
        this.dogs=[
            new Dog(1,'Boby','6 meses','25 cm','Pequines'),
            new Dog(1,'Tomi','6 meses','25 cm','French'),
            new Dog(1,'Loki','6 meses','25 cm','Boxerin')
        ]
    }
}
