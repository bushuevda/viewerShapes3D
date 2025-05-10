import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows} from '@react-three/drei'
import React from "react";
import { DeserializateShapesGroups } from "../../Store/shapeStore/controlShapeGroups";
import {Flex} from '@adobe/react-spectrum';



export class CanvasViewer extends React.Component{
    render(): React.ReactNode {
        return <Flex height={{S: "250px", M: "640px", L: "700px", XL:"800px", XXL: "720px"}} 
                    width={{S: "640px", M: "700px", L:"800px", XL:"1000px", XXL: "1100px"}}>
                <Canvas  camera={{ position: [25, 25, 25], fov: 110 }}>
                    <DeserializateShapesGroups></DeserializateShapesGroups>
                  <ambientLight intensity={0.7} />
                  <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                  <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
                  <OrbitControls minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={false} />
                </Canvas>
     </Flex>
    }
}
