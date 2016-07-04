System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Config;
    return {
        setters:[],
        execute: function() {
            /**Creacion de un objeto*/
            Config = (function () {
                function Config() {
                }
                Config.NAME = 'Lenin';
                Config.lastName = 'Samaniego';
                return Config;
            }());
            exports_1("Config", Config);
        }
    }
});
//# sourceMappingURL=config.service.js.map