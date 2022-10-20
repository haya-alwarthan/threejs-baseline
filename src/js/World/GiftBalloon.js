import * as THREE from 'three';
import Experience from '../Experience/Experience'
export default class GiftBalloon {
    constructor(){
        this.experience= new Experience();
        this.scene= this.experience.scene;

        const geomtry = new THREE.BoxGeometry(5,5,5);
        const material = new THREE.MeshBasicMaterial({color:'green'});
        const mesh = new THREE.Mesh(geomtry,material);
        this.scene.add(mesh);
      

        }


    
}