import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppMyStore } from './myStore.component';
//Importado Librerias para el Routing
import { APP_ROUTER_PROVIDERS } from './myStore.routes';
bootstrap(AppMyStore,[
    APP_ROUTER_PROVIDERS
]).catch(err => console.error(err));