import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './app/templates/login.component.html',
    styleUrls: ['./app/styles/css/login.css']
})
export class Login implements OnInit {
    public user='';
    public password='';
    login(event){
        if(this.user=='admin' && this.password =='admin'){
            alert('Logeado')
            console.log(event);      
        }       
    }
    constructor() {
    }
    ngOnInit() { 
    }
}