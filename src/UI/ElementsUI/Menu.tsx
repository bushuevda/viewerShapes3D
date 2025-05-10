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
        return <Flex  UNSAFE_className="menuFlex" height={{S: "250px", M: "400px", L:"500px", XL:"600px", XXL: "700px"}} 
                        width={{S: "10px", M: "340px", L:"380px", XL:"420px", XXL: "460px"}}>
                    <Flex UNSAFE_className="propertiesFlex" height={{S: "250px", M: "400px", L:"500px", XL:"600px", XXL: "700px"}} 
                        width={{S: "10px", M: "340px", L:"380px", XL:"420px", XXL: "460px"}}>
                        <DeserializatePropertiesShapes></DeserializatePropertiesShapes>
                    </Flex>
                    <Flex direction={"row"}>
                        <ButtonClearCanvas></ButtonClearCanvas>
                        <Button UNSAFE_className='buttonsMenu buttonProperties' variant="primary" onPress={this.handleHide} 
                                left={{S: "10px", M: "10px", L:"40px", XL:"60px", XXL: "80px"}}>Add group</Button>
                    </Flex>
                    <Flex UNSAFE_className="addGroupFlex" height={{S: "50px", M: "150px", L:"100px", XL:"200px", XXL: "300px"}} 
                        width={{S: "70px", M: "120px", L:"170px", XL:"220px", XXL: "260px"}} top={{S: "110px", M: "80px", L:"180px", XL:"280px", XXL: "380px"}}>
                        <WindowAddingGroup callbackHide={this.handleHide} state_hide={this.state.state_hide}></WindowAddingGroup>
                    </Flex>
                </Flex>
    }
}