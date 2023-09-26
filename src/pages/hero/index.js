import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { OrbitControls } from '@react-three/drei';
import { Content } from "./styles";

function Model (props) {
    const {scene} = useGLTF("flash.glb");
    return <primitive object={scene} {...props} />
}

const Hero = () => {
    return (
        <div className="App">
            <div className="App-header">  
                <Content>
                <Canvas
                    dpr={[4,8]}
                    shadows camera={{fav:1000}}
                    style={{"position":"absolute"}}
                >
                    <OrbitControls 
                        minAzimuthAngle={-Math.PI / 4}
                        maxAzimuthAngle={Math.PI / 4}
                        minPolarAngle={Math.PI / 2 }
                        maxPolarAngle={Math.PI / 2} // limita a rotação no eixo vertical

                    />
                    <PresentationControls
                        speed={1}
                        global zoom={0.5}
                        /* polar={[-100, Math.PI / 4]} */
                        cursor={true} 
                        enabled={true} // the controls can be disabled by setting this to false
                        
                        /*                     
                        global={false} // Spin globally or by dragging the model
                        cursor={true} // Whether to toggle cursor style on drag
                        snap={false} // Snap-back to center (can also be a spring config)
                        speed={1} // Speed factor
                        zoom={1} // Zoom factor when half the polar-max is reached
                        rotation={[0, 0, 0]} // Default rotation
                        polar={[0, Math.PI / 2]} // Vertical limits
                        azimuth={[-Infinity, Infinity]} // Horizontal limits
                        config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
                        domElement={events.connected} // The DOM element events for this controller will attach to */
                    >
                        <Stage environment={null}>
                            <Model scale={0.05} />
                        </Stage>
                    </PresentationControls>
                </Canvas>
                </Content>
            </div>
        </div>  
    );
}

export default Hero;