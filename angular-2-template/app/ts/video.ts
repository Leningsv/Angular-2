/**Sintaxis de un objeto en Angular2 */
export class Video{
    id: Number;
    title: String;
    videoCode: String;
    des: String;
    /**Definicion del Constructor del Objeto */
    constructor(id:Number, title:String, videoCode:String, des:String){
        this.id=id;
        this.title=title;
        this.videoCode=videoCode;
        this.des=des;
    }
}