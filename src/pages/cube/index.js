import { Canvas } from "@react-three/fiber";
import Cube3d from "./cube";
import music from "../../assets/music.wav";
import { OrbitControls } from '@react-three/drei'

function play (){
    new Audio(music).play()
}

function CubeApp () {
    return(
        <>
            <div>
                <button onClick={play}>Play Music</button>
            </div>
            <section>
                <Canvas>
                    {/* <pointLight position={[20,20,10]}/> */}
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Cube3d position={[-1.2, 0, 0]}/>
                    <OrbitControls />
                    
                </Canvas>
            </section>
        </>
    )
}

export default CubeApp;