/* eslint-disable react/no-unknown-property */
// import Spline from '@splinetool/react-spline';
import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { a } from "@react-spring/three";

import modelScene from "../assets/Model/model2.glb";

export default function Model(props) {
  const islandRef = useRef();
  const faceRef = useRef();
  const { nodes, materials, animations } = useGLTF(modelScene);
  const { actions } = useAnimations(animations);
  const { mouse } = useThree();
  const lastTouchRef = useRef({ x: 0, y: 0 });

  // console.log("Animations:", animations);



  useFrame(() => {
    // Update rotation based on mouse position
    if (faceRef.current) {
      // Make rotation a bit smoother by using smaller values
      faceRef.current.rotation.y = mouse.x * Math.PI * 0.2; //
      faceRef.current.rotation.x = -mouse.y * Math.PI * 0.2; //
    }
  });

  const handleTouchStart = (event) => {
    if (event.touches.length === 1) {
      const touch = event.touches[0];
      lastTouchRef.current = { x: touch.clientX, y: touch.clientY }; // Initialize touch position
    }
  };

  const handleTouchMove = (event) => {
    if (faceRef.current && event.touches.length === 1) {
      const touch = event.touches[0];
      const deltaX = touch.clientX - lastTouchRef.current.x;
      const deltaY = touch.clientY - lastTouchRef.current.y;

      // Update rotation based on touch movement, adjusting for smoothness
      faceRef.current.rotation.y += deltaX * 0.002; // Adjust this factor for sensitivity
      faceRef.current.rotation.x -= deltaY * 0.002;

      // Update last touch position
      lastTouchRef.current = { x: touch.clientX, y: touch.clientY };
    }
  };

  useEffect(() => {
    // Add touch event listeners for mobile interaction
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      // Clean up the event listeners on component unmount
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);



  return (
    // <Spline scene="https://prod.spline.design/gdlBQ5XjLH0UQBNX/scene.splinecode" />
    <a.group ref={islandRef} {...props}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.412}
        >
          <group
            name="9e455dcd04544c79ad08ad5d1bab9b6afbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="head1" position={[0, 0.004, 0]} scale={0.991} />
                <group name="arms" />
                <group name="arms1" />
                <group name="finger1" />
                <group name="arm1" />
                <group name="finger2" />
                <group name="finger3" />
                <group name="finger4" />
                <group ref={faceRef} name="group1" position={[0, 3.61, 0]}>
                  <group  name="eyes" position={[0, -0.015, 1.762]}>
                    <mesh
                      name="0"
                      castShadow
                      receiveShadow
                      geometry={nodes["0"].geometry}
                      material={materials.lambert5}
                      morphTargetDictionary={nodes["0"].morphTargetDictionary}
                      morphTargetInfluences={nodes["0"].morphTargetInfluences}
                    />
                  </group>
                  <group name="brain">
                    <mesh
                      name="brain_lambert4_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.brain_lambert4_0.geometry}
                      material={materials.lambert4}
                    />
                  </group>
                  <group  name="head">
                    <mesh
                      name="head_lambert2_u1_v-1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["head_lambert2_u1_v-1_0"].geometry}
                      material={materials["lambert2_u1_v-1"]}
                    />
                    <mesh
                      name="head_lambert3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.head_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                </group>
                <group
                  name="group2"
                  position={[0, 0.024, 0]}
                  rotation={[0, -0.027, 0]}
                >
                  <group name="left_finger4" position={[1.682, -2.088, 0.074]}>
                    <mesh
                      name="left_finger4_lambert1_u1_v-1_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["left_finger4_lambert1_u1_v-1_0"].geometry
                      }
                      material={materials["lambert1_u1_v-1"]}
                    />
                  </group>
                  <group name="body">
                    <mesh
                      name="body_lambert1_u1_v-1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["body_lambert1_u1_v-1_0"].geometry}
                      material={materials["lambert1_u1_v-1"]}
                    />
                  </group>
                  <group
                    name="left_finger2"
                    position={[1.739, -2.203, -0.268]}
                    rotation={[0, 0, 0.015]}
                  >
                    <mesh
                      name="left_finger2_lambert1_u1_v-1_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["left_finger2_lambert1_u1_v-1_0"].geometry
                      }
                      material={materials["lambert1_u1_v-1"]}
                    />
                  </group>
                  <group
                    name="right_finger3"
                    position={[-1.737, -2.256, 0.189]}
                    rotation={[0, -0.013, 0]}
                  >
                    <mesh
                      name="right_finger3_lambert1_u1_v-1_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["right_finger3_lambert1_u1_v-1_0"].geometry
                      }
                      material={materials["lambert1_u1_v-1"]}
                    />
                  </group>
                  <group
                    name="left_finger3"
                    position={[1.8, -2.21, 0.081]}
                    rotation={[0, 0, 0.04]}
                  >
                    <mesh
                      name="left_finger3_lambert1_u1_v-1_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["left_finger3_lambert1_u1_v-1_0"].geometry
                      }
                      material={materials["lambert1_u1_v-1"]}
                    />
                  </group>
                  <group
                    name="left_finger1"
                    position={[1.727, -2.169, -0.591]}
                    rotation={[0, -0.179, 0]}
                  >
                    <mesh
                      name="left_finger1_lambert1_u1_v-1_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["left_finger1_lambert1_u1_v-1_0"].geometry
                      }
                      material={materials["lambert1_u1_v-1"]}
                    />
                  </group>
                  <group
                    name="right_finger1"
                    position={[-1.628, -2.219, -0.476]}
                    rotation={[0.047, 0, 0]}
                  >
                    <mesh
                      name="right_finger1_lambert1_u1_v-1_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["right_finger1_lambert1_u1_v-1_0"].geometry
                      }
                      material={materials["lambert1_u1_v-1"]}
                    />
                  </group>
                  <group
                    name="right_finger2"
                    position={[-1.704, -2.283, -0.125]}
                  >
                    <mesh
                      name="right_finger2_lambert1_u1_v-1_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["right_finger2_lambert1_u1_v-1_0"].geometry
                      }
                      material={materials["lambert1_u1_v-1"]}
                    />
                  </group>
                  <group
                    name="right_arm"
                    position={[-2.224, -0.328, -0.371]}
                    rotation={[0, 0.156, 0]}
                  >
                    <mesh
                      name="right_arm_lambert1_u1_v-1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_arm_lambert1_u1_v-1_0"].geometry}
                      material={materials["lambert1_u1_v-1"]}
                    />
                  </group>
                  <group
                    name="right_finger4"
                    position={[-1.753, -2.088, 0.261]}
                  >
                    <mesh
                      name="right_finger4_lambert1_u1_v-1_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["right_finger4_lambert1_u1_v-1_0"].geometry
                      }
                      material={materials["lambert1_u1_v-1"]}
                    />
                  </group>
                  <group
                    name="left_arm"
                    position={[2.199, -0.231, -0.475]}
                    rotation={[0, -0.106, 0]}
                  >
                    <mesh
                      name="left_arm_lambert1_u1_v-1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["left_arm_lambert1_u1_v-1_0"].geometry}
                      material={materials["lambert1_u1_v-1"]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
}
