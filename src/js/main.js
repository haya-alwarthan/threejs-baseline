import * as THREE from 'three';
import '../styles.css'
import {  default as Experience } from './Experience/Experience.js'

const experience = new Experience(document.querySelector('.experience-canvas'));
console.log(experience) 