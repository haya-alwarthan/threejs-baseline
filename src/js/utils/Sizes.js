import EventEmitter from 'events';
import * as THREE from 'three';
export default class Sizes extends EventEmitter{
    constructor(){
        super();
        this.width= window.innerWidth;
        this.height= window.innerHeight;
        this.frustrum=5; 
        this.aspect= this.width/this.height;
        this.pixelRatio= Math.min(window.devicePixelRatio,2);

//Update sizes on window resize
        window.addEventListener("resize",()=>{

            this.width= window.innerWidth;
            this.height= window.innerHeight;
            this.aspect= this.width/this.height;
            this.pixelRatio= Math.min(window.devicePixelRatio,2);
            this.emit("resize");
        })


    }
}