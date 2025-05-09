import React, {ReactElement, PropsWithChildren} from "react";
import * as THREE from 'three'
import { ShapeInfo} from '../Store/shapeStore/reducerShapeGroup'

export interface IGeometry extends ShapeInfo, PropsWithChildren  {
    geometry: THREE.BufferGeometry;
}


export interface IState{
    current_material: ReactElement,
    base: ReactElement,
    selected: ReactElement,
    mode_select: boolean, 
}





export class Objects3D extends React.Component<IGeometry, IState>{
    geometry: THREE.BufferGeometry; 
    constructor(props: IGeometry){
        super(props);
        this.geometry = props.geometry;
        this.geometry.computeBoundingBox();
        this.geometry.center();
        this.geometry.scale(props.size.width, props.size.height, props.size.length);
        this.geometry.translate(props.position.x, props.position.y, props.position.z);

        this.state = {
            current_material: <meshBasicMaterial attach={"material"}  vertexColors  />,
            base: <meshStandardMaterial attach={"material"}  vertexColors />,
            selected : <meshStandardMaterial attach={"material"} emissive={new THREE.Color("yellow")} 
                        emissiveIntensity={1} vertexColors color={new THREE.Color("blue")} />,
            mode_select: false 
        }
        
        this.click = this.click.bind(this);
        this.pointerMissed = this.pointerMissed.bind(this);
    }

    

    setSelectMode ()  {
        if(!this.state.mode_select){
            this.setState((previousState) => ({
                current_material: this.state.selected, 
                base: previousState.current_material, 
                mode_select:true}
            ));
        }

    }
    
    setUnselectMode()  {
        if(this.state.mode_select){
            this.setState(() => ({ current_material: this.state.base, mode_select: false}));   
        }
    }


    pointerMissed(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        e.stopPropagation();
        this.setUnselectMode();
    }
    click(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        e.stopPropagation();
        this.setSelectMode();
    }

    render() { 
        return <mesh receiveShadow castShadow geometry={this.geometry} onPointerMissed={this.pointerMissed} onClick={this.click}>
            {this.state.current_material}
        </mesh>
    }


}

