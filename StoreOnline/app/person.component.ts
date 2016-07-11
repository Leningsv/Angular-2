import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-person',
    templateUrl: './app/templates/person.component.html'
})
export class Person implements OnInit {
    /*public name:String;
    public lastName:String;
    public age:Number;
    public mail:String;
    public phone:String;
    public cellphone:String;
    constructor(name:String, lastName:String, age:Number, mail:String, phone:String, cellphone:String) {
        this.name=name;
        this.lastName=lastName;
        this.age=age;
        this.mail=mail;
        this.phone=phone;
        this.cellphone=cellphone;
    }*/
    constructor(){
    }
    ngOnInit() { 
    }
}