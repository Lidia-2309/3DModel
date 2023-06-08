import React, {useRef, useState} from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function Cube3d (props) {
    const ref = useRef();

    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    useFrame((state,delta) => (ref.current.rotation.x += 0.01));

    return (
        <>
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => setClicked(!clicked)}
            onPointerOver={(event) => setHovered(true)}
            onPointerOut={(event) => setHovered(false)}
        >
            <OrbitControls target = {[0, 0.35, 0]} maxPolarAngle={1.45}/>
            <PerspectiveCamera makeDefault fav= {10} position={[3, 2, 5]}/>
            <boxGeometry args={[2, 2, 2]}/>
            <meshStandardMaterial
                wireframe={props.wireframe}
                color={hovered ? "blue" : "orange"}
            />
        </mesh>
        </>
    );
}

export default Cube3d;