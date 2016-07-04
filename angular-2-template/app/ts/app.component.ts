import {Component} from 'angular2/core';
/**Importacion de Objetos y componentes*/
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component'

@Component({
    selector: 'my-app',
    templateUrl : `app/ts/app.component.html`,
    /**Cuando se utiliza mas de un compenete es nesesario
     * el uso de directivas */ 
    directives: [PlaylistComponent]
    //template: '<h1>Angular 2 Template</h1>'
})

export class AppComponent {
    name: String = Config.NAME;
    lastName: String =Config.lastName;
    /**Hacer uso de los elementos importados */
    videos: Array<Video>;
    constructor(){
        this.videos=[
            new Video(1, 'Diana','001','Primer'),
            new Video(2, 'Ana', '002', 'Segundo'),
            new Video(3, 'Johana', '003','Tercer')
        ]
        
    }
}
