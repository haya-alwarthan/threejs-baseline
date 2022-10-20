import * as THREE from 'three';
import Camera from '../utils/Camera';
import Renderer from '../utils/Renderer';
import Sizes from '../utils/Sizes';
import Time from '../utils/Time';
import World from '../World/World';
export default class Experience{
    //This class is to act as a Singlton
    static instance;
    constructor(canvas){
        if(Experience.instance){
            return Experience.instance;
        }

        Experience.instance=this;
        this.canvas= canvas;
        this.sizes= new Sizes();
        this.time= new Time();
        this.scene= new THREE.Scene();
        this.camera= new Camera();
        this.renderer= new Renderer();
        this.world= new World();
        this.time.on("update",()=>{
            this.update();
        })
        this.sizes.on("resize",()=>{
            this.resize();
        })
        

    }
    update(){
        this.camera.update();
        this.renderer.update();
        
    }
    resize(){
        this.camera.resize();
        this.renderer.resize();
        console.log(this)
    }
}

export var __useDefault = true; 