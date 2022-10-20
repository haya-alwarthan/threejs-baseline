import * as THREE from 'three';
import Experience from '../Experience/Experience';
import GiftBalloon from './GiftBalloon';
export default class World {
    constructor(){
        this.experience= new Experience();
        this.sizes= this.experience.sizes;
        this.scene= this.experience.scene;
        this.renderer= this.experience.renderer;
        this.camera= this.experience.camera;
        this.canvas= this.experience.canvas;
        this.giftBalloon= new GiftBalloon();
    

        }


    
}