import React from 'react'
import {ShapeType} from '../../Store/shapeStore/reducerShapeGroup'
import { ButtonAddGroup } from '../../Store/shapeStore/controlShapeGroups';
import { Picker, Item, Key, Text, Flex, Slider, Button, Divider } from '@adobe/react-spectrum';
import './style/WindowAdd.css'
import { isVisible } from '@testing-library/user-event/dist/utils';
import './style/Buttons.css'


export interface IState {
    type: ShapeType;
    length: number;
    width: number;
    height: number;
    count: number;
}
interface IWindow extends IState{
    typeName: string;
}

interface IProps {
    state_hide: "hidden" | "visible";
    callbackHide(): void;
}

/*
    Панель добавления групп элементов
*/
export class WindowAddingGroup extends React.Component<IProps, IWindow>{
    constructor(props: IProps){
        super(props);
        this.state = {
            type: ShapeType.Box,
            length: 1,
            width: 1,
            height: 1,
            count: 1,
            typeName: "Box",
        };
        this.handleInputType = this.handleInputType.bind(this);
    }


    compareType = (type: string) => {
        if(type == "Box")
            return ShapeType.Box
        else if(type == "Pyramid")
            return ShapeType.Pyramid
    }


    handleInputType = (e: Key) => {
        this.setState({ typeName: e.toString(), type: this.compareType(e.toString())! });
    };


    handleInputLength = (e: number) => {
        this.setState({ length: (e) });
    };


    handleInputWidth = (e: number) => {
        this.setState({ width: e });
    };

    handleInputHeight = (e: number) => {
        this.setState({ height: e });
    };

    handleInputCount = (e: number) => {
        this.setState({ count: e });
    };



    render(): React.ReactNode {
        return <Flex UNSAFE_style={{visibility:this.props.state_hide}} direction={"column"}>
            <Divider size="M" />
            <Text UNSAFE_className='addGroupText addGroupTextHeader'>Add primitives group</Text>
            <Divider size="M" />
            <Flex>
                <Text UNSAFE_className='addGroupText'>Type</Text> <Picker UNSAFE_className='addGroupPicker'  defaultSelectedKey="Box" label=" " onSelectionChange={(e) => {this.handleInputType(e)}}>    
                                    <Item key="Box">Box</Item>
                                    <Item key="Pyramid">Pyramid</Item>
                            </Picker>
            </Flex>
            <Divider size="M" />

            <Flex >
                <Text UNSAFE_className='addGroupText'>Length</Text> 
                <Slider UNSAFE_className='addGroupSlider' minValue={1} maxValue={100} label=" " defaultValue={1} onChange={(val) => {this.handleInputLength(val)}} />
            </Flex>
            <Divider size="M" />
            <Flex>
                <Text UNSAFE_className='addGroupText'>Width</Text> 
                <Slider UNSAFE_className='addGroupSlider' minValue={1} maxValue={100} label=" " defaultValue={1} onChange={(val) => {this.handleInputWidth(val)}} />
            </Flex>
            <Divider size="M" />
            <Flex>
                <Text UNSAFE_className='addGroupText'>Height</Text> 
                <Slider UNSAFE_className='addGroupSlider' minValue={1} maxValue={100} label=" " defaultValue={1} onChange={(val) => {this.handleInputHeight(val)}} />
            </Flex>
            <Divider size="M" />
            <Flex>
                <Text UNSAFE_className='addGroupText'>Count</Text> 
                <Slider  UNSAFE_className='addGroupSlider' minValue={1} maxValue={100}  label=" " defaultValue={1} onChange={(val) => {this.handleInputCount(val)}} />
            </Flex>
            <Divider size="M" />
            <Flex>
                <Button UNSAFE_className='buttonsMenu' variant="primary" onPress={this.props.callbackHide}>Cancel</Button>
                <ButtonAddGroup type={this.state.type} height={this.state.height} length={this.state.length} width={this.state.width} count={this.state.count}></ButtonAddGroup>
            </Flex>
        </Flex>
    }

}