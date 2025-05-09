import React from "react";
import { ShapeInfo} from "../../Store/shapeStore/reducerShapeGroup";
import {Flex, Text, Divider} from '@adobe/react-spectrum';
import './style/Properties.css'
import { ShapeType } from "../../Store/shapeStore/reducerShapeGroup";


/*
    Свойства добавленных объектов
*/

export class Properties extends React.Component<ShapeInfo>{
    constructor(props: ShapeInfo){
        super(props)
        this.state = {
            base: "primary",
            selected: "accent",
        }

    }

    render(): React.ReactNode {
        return <Flex UNSAFE_className="propertiesInfoFlex" >
                    <Flex direction={"column"}>
                    <Divider size="M" />
                        <Flex >
                            {this.props.type == ShapeType.Box
                            ? <Text UNSAFE_className="propertiesInfoText">Shape {this.props.id + 1}</Text>
                            : <Text UNSAFE_className="propertiesInfoText">Shape {this.props.id + 1}</Text>}
                        </Flex>
                        <Flex>
                            {this.props.type == ShapeType.Box
                            ? <Text UNSAFE_className="propertiesInfoText">type: Box</Text>
                            : <Text UNSAFE_className="propertiesInfoText">type: Pyramid </Text>}
                        </Flex>
                        <Flex direction={"row"}>
                            <Flex UNSAFE_className="propertiesPositionFlex" >
                                <Text UNSAFE_className="propertiesInfoText">
                                    position ({this.props.position.x.toFixed(2)}, {this.props.position.y.toFixed(2)}, {this.props.position.z.toFixed(2)})
                                </Text>
                            </Flex>
                            <Flex UNSAFE_className="propertiesSizeFlex">
                                <Text UNSAFE_className="propertiesInfoText">
                                    size ({this.props.size.width}, {this.props.size.height}, {this.props.size.length})
                                </Text>
                            </Flex>
                        </Flex>

                    </Flex>
                </Flex>
    }
} 