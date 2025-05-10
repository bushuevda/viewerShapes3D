import {ReactElement} from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import { clear, add } from './reducerShapeGroup'
import { Box, Pyramid } from '../../Geometry/Shapes'
import { Properties } from '../../UI/ElementsUI/Properties'
import {IState} from '../../UI/ElementsUI/WindowAdd'
import { ShapeType } from './reducerShapeGroup'
import {Button} from '@adobe/react-spectrum';
import '../../UI/ElementsUI/style/Buttons.css'




/*
    Кнопка добавления группы элементов
*/
export function ButtonAddGroup(props: IState) {
  const shapeState = useAppSelector((state) => state.shapesGroup.arrShapes);
  const dispatch = useAppDispatch();
  let index = shapeState.length;
  let max = index + props.count;

  const addGroup = () => {
    for(let i = index; i < max; i++){
      dispatch( add({id: i, size: {width: props.width, height: props.height, length: props.length}, 
                     position: {x: calcRand(-25, 25), y: calcRand(-25, 25), z:calcRand(-25, 25)}, type: props.type})); 
    } 
  
  }
  return <Button UNSAFE_className='buttonsMenu' variant="primary" onPress={addGroup}>Add</Button>;
}


/*
    Кнопка очищения холста
*/
export function ButtonClearCanvas(){
    const dispatch = useAppDispatch();
    return <Button UNSAFE_className='buttonsMenu buttonProperties' variant="primary" onPress={() => {dispatch(clear())}} 
              left={{S: "10px", M: "10px", L:"40px", XL:"60px", XXL: "80px"}}>Clear</Button>;
}



/*
    Преобразование свойств объектов из store в <Properties></Properties>
*/
export function DeserializatePropertiesShapes(){
    const shapeState = useAppSelector((state) => state.shapesGroup.arrShapes);
    const deserializateProperties: ReactElement<typeof Properties>[] = [];
    shapeState.forEach((val) => {
      deserializateProperties.push(<Properties key={val.id} id={val.id} size={val.size} position={val.position}
        type={val.type} ></Properties>);
    })

    return <div> {deserializateProperties} </div>;
}





function calcRand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}



/*
    Преобразование свойств объектов из store в <Pyramid></Pyramid>  | <Box></Box>
*/
export function DeserializateShapesGroups(){
  const shapeState = useAppSelector((state) => state.shapesGroup.arrShapes);
  const deserializateShapesGroups: ReactElement<typeof Box>[] = [];

  shapeState.forEach((val) => {
    if(val.type == ShapeType.Box)
    deserializateShapesGroups.push(<Box key={val.id} size={val.size} position={val.position} id={val.id} type={ShapeType.Box} ></Box>); 
    else if(val.type == ShapeType.Pyramid)
    deserializateShapesGroups.push(<Pyramid key={val.id} size={val.size} position={val.position} id={val.id} type={ShapeType.Pyramid} ></Pyramid>);
  })

  return <group>{deserializateShapesGroups}</group>;
}

