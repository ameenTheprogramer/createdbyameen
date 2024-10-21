
import React, { useRef, useEffect } from 'react';
// import supramk4 from '../3D/supramk4.glb'
import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'



export const Supramk4 = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        const width = window.innerWidth * 0.95
        renderer.setSize(width, window.innerHeight);
        renderer.setClearColor('#282c34')


       

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // const loader = new GLTFLoader();
        // loader.load(supramk4, (gltf) => {
        //     const model = gltf.scene;
        //     scene.add(model);

        //     // Optional: You can set the initial position of the model here
        //     model.position.set(0, 0, 0);
        //       model.rotation.set(0 , 0, 0)

        // });

        camera.position.set(1, 1, 5)


        window.addEventListener('resize', function(){
            camera.aspect = this.window.innerWidth/ this.window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(this.window.innerWidth, this.window.innerHeight)
        })



        const animate = () => {
            //   requestAnimationFrame(animate);

            // Rotate the model to make it float around
            // const model = scene.children[2];
            // if (model) {
                
                
            //     // model.rotation.y += -0.01;
            // }

            renderer.render(scene, camera);
        };

        renderer.setAnimationLoop(animate)

        animate();

        return () => {
            // Clean up Three.js objects if needed
        };
    }, []);

    return <canvas id='canvas' className='canwas' ref={canvasRef} />;
};