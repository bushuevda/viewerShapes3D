import React  from "react";
import { ButtonClearCanvas} from "../../Store/shapeStore/controlShapeGroups";
import {WindowAddingGroup} from "./WindowAdd"
import { DeserializatePropertiesShapes } from "../../Store/shapeStore/controlShapeGroups";
import { Flex, Button } from "@adobe/react-spectrum";
import './style/Menu.css'
import './style/Buttons.css'

interface IState{
    state_hide: "hidden" | "visible";
}


/*
    Панель свойств объектов
*/

export class Menu extends React.Component<{}, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            state_hide: "hidden",
        }
    }

    handleHide = () => {
        if(this.state.state_hide == "hidden")
            this.setState({state_hide: "visible"});
        else 
            this.setState({state_hide: "hidden"});
    }

    render(): React.ReactNode{
        return <Flex UNSAFE_className="menuFlex">
                    <Flex UNSAFE_className="propertiesFlex">
                        <DeserializatePropertiesShapes></DeserializatePropertiesShapes>
                    </Flex>
                    <Flex direction={"row"}>
                        <ButtonClearCanvas></ButtonClearCanvas>
                        <Button UNSAFE_className='buttonsMenu buttonProperties' variant="primary" onPress={this.handleHide}>Add group</Button>
                    </Flex>
                    <Flex UNSAFE_className="addGroupFlex">
                        <WindowAddingGroup callbackHide={this.handleHide} state_hide={this.state.state_hide}></WindowAddingGroup>
                    </Flex>
                </Flex>
    }
}