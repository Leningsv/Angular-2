// Importando las Librerias a usar
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
/* Una Pagina Puede estar formada por muchos componentes
por medio de los cuales se conformara la pagina */
@Component({
    selector: 'my-app',
    //template : '<h1> {{title}}</h1>'
    template : `<h1> {{title}}</h1>
    <h2>{{carPart.id}}</h2>
    <p>{{carPart.name}}</p>
    <p>{{carPart.description}}</p>
    <p>{{carPart.inStock}}</p>`
})
//Se declara los elementos que conformaran el componente
class AppComponent {
    title = 'Ultra Racing'
    carPart={
        'id':1,
        'name': 'Super Tires',
        'description': 'These tires are the very best',
        'inStock':5
    }
}
/*Instanciar el componente 
Aqui se esta instanciando el contenido del component*/
bootstrap(AppComponent)