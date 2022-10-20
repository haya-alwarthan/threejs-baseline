import * as THREE from 'three';
import Experience from "../Experience/Experience";


export default class Camera{
    constructor(){
        this.experience= new Experience();
        this.sizes= this.experience.sizes;
        this.scene= this.experience.scene;
        this.canvas= this.experience.canvas;
        this.createPerpectiveCamera();
        this.createOrthgraphicCamera();
        console.log(this.perspectiveCamera,this.orthgraphicCamera)
    
    }

    createPerpectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            80,  
            this.sizes.aspect,  
            0.1, 
            1000
        );
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.z=25;

    }


    createOrthgraphicCamera(){
        
        this.orthgraphicCamera= new THREE.OrthographicCamera(
            (-this.sizes.aspect*this.sizes.frustrum)/2,
            (this.sizes.aspect*this.sizes.frustrum)/2,
            this.sizes.frustrum/2,
            -this.sizes.frustrum/2,
            -100,
            100


        )
        
        this.scene.add(this.orthgraphicCamera);
    }
//Updating for camera aspects
    resize(){
        this.perspectiveCamera.aspect= this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();



        this.orthgraphicCamera.left=  (-this.sizes.aspect*this.sizes.frustrum)/2;
        this.orthgraphicCamera.right=  (this.sizes.aspect*this.sizes.frustrum)/2;
        this.orthgraphicCamera.top=  this.sizes.frustrum/2;
        this.orthgraphicCamera.bottom=  -this.sizes.frustrum/2;
        this.orthgraphicCamera.updateProjectionMatrix();
    }

    //Updating the orbit controls

    update(){

    }


}