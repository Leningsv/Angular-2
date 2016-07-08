import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  //template: '<h1>My First Angular 2 App {{name}}</h1>',
  templateUrl : `app/views/app.component.html` 
})
export class AppComponent { 
  name = 'Lenin';
  clickEventHandler(event){
    //console.log(event);
    console.log(event.path)
  }
}  