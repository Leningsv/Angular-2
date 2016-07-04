System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Video;
    return {
        setters:[],
        execute: function() {
            /**Sintaxis de un objeto en Angular2 */
            Video = (function () {
                /**Definicion del Constructor del Objeto */
                function Video(id, title, videoCode, des) {
                    this.id = id;
                    this.title = title;
                    this.videoCode = videoCode;
                    this.des = des;
                }
                return Video;
            }());
            exports_1("Video", Video);
        }
    }
});
//# sourceMappingURL=video.js.map