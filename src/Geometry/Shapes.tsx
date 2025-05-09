import React, { ReactElement} from 'react'
import {Objects3D } from './Object3D'
import { createBasisRectangle, createBasisPyramid } from './BasisShapes'
import {ShapeInfo } from '../Store/shapeStore/reducerShapeGroup'
import { ShapeType } from '../Store/shapeStore/reducerShapeGroup'



export class Box extends React.Component<ShapeInfo> {
        
    constructor(props: ShapeInfo){
        super(props);
    }

    render() {
        return <Objects3D id={this.props.id} size={this.props.size} position={this.props.position} 
                         type={ShapeType.Box} geometry={createBasisRectangle()} >
             </Objects3D>
    }
}



export class Pyramid extends React.Component<ShapeInfo> {
        
    constructor(props: ShapeInfo){
        super(props);
    }

    render() {
        return <Objects3D id={this.props.id} size={this.props.size} position={this.props.position} 
                         type={ShapeType.Pyramid} geometry={createBasisPyramid()} >
             </Objects3D>
    }
 
}

