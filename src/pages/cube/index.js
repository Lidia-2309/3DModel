import { Canvas } from "@react-three/fiber";
import Cube3d from "./cube";
import music from "../../assets/music.wav";

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
                    <pointLight position={[20,20,10]}/>
                    <Cube3d position={[-1.2, 0, 2]}/>
                </Canvas>
            </section>
        </>
    )
}

export default CubeApp;