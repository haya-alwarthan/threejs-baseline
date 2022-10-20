import { EventEmitter } from 'events';
import * as THREE from 'three';
export default class Time extends EventEmitter{
    constructor(){
        super();
        this.start=Date.now();
        this.current=this.start;
        this.elapsed=0;
        this.delta=16;


        this.update();
    }

    update(){
        const c= Date.now();
        this.delta= c-this.current;
        this.current=c;
        this.elapsed=this.current-this.start;
        this.emit("update");
        window.requestAnimationFrame(()=>this.update());

      
    }
}