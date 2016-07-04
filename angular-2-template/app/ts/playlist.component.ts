/**Construccion de un componente */
import {Component} from 'angular2/core';
/**Importaciones */
import {Video} from './video'

@Component({
    selector: 'playlist',
    /**La ruta se basa en el index.html al directorio
     * en que esta el component.html
     */
    templateUrl : `app/ts/playlist.component.html`,
    /**Para poder hacer uso de los elementos de otro
     * componente
     */
    inputs:['videos']
})
export class PlaylistComponent{
    /**Implementacion de un evento */
    onSelect(item:Video){
        console.log(JSON.stringify(item));
    }
}