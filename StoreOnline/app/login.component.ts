import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
            this.router.navigate(['/dashboard']);   
        }       
    }
    /**Implementacion navigate */
    constructor(private router: Router) {
    }
    ngOnInit() { 
    }
}