import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model (props) {
    const {scene} = useGLTF("skyHome.glb");
    return <primitive object={scene} {...props} />
}

const EarthPage = () => {
    return (
        <div className="App">
            <div className="App-header">  
                <Canvas
                    dpr={[4,8]}
                    shadows camera={{fav:1000}}
                    style={{"position":"absolute"}}
                >
                    <PresentationControls
                        speed={3}
                        global zoom={0.5}
                        polar={[-100, Math.PI / 4]}
                    >
                        <Stage environment={null}>
                            <Model scale={0.05} />
                        </Stage>
                    </PresentationControls>
                </Canvas>
            </div>
        </div>  
    );
}

export default EarthPage;