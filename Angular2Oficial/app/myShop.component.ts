/**View encapsulartion sirve para que todos los componentes utilizen los mismo css */
import {Component,ViewEncapsulation} from '@angular/core';
import {AppMyMovies} from './myMovies.component';
import {AppMyPeople} from './myPeople.component';

@Component({
    selector:'app-myShop',
    templateUrl : `app/views/myShop.component.html`, 
    directives: [AppMyMovies,AppMyPeople],
    styleUrls:[`bower_components/bootstrap/dist/css/bootstrap.css`],
    /**View Encapsulation */
    encapsulation:ViewEncapsulation.None
})
export class AppMyShop{
    nameIf= true;
    public movieList=[
        'Batman vs Superman',
        'Civil War',
        'Harry Potter',
        'Wordl of Warcraft'
    ]
}
