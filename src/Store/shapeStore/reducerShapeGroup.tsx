import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ReactElement } from 'react';
import { Properties } from '../../UI/ElementsUI/Properties';



export enum ShapeType {
  Box, Pyramid
}


type ShapePosition = {
  x: number;
  y: number;
  z: number;
}


type ShapeSize = {
  width: number;
  height: number;
  length: number;
}

export type ShapeInfo = {
  id: number;
  size: ShapeSize;
  position: ShapePosition;
  type: ShapeType;
}


export interface ShapeProperties{
  shapeInfo: ShapeInfo;
}


export interface ShapesState{
  arrShapes: ShapeInfo[];
}

const initialState: ShapesState = {
  arrShapes: [],
}


export type SelectInfo = {
  id: number;
  mode: boolean;
}



export const shapeGroupReducer = createSlice({
  name: 'shapeGroupReducer',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ShapeInfo>) => {
      state.arrShapes.push({id: action.payload.id, size: action.payload.size, position: action.payload.position,
                             type: action.payload.type  });
    },
    clear: (state) => {
      state.arrShapes = [];
    },

  },
})


export const {add, clear} = shapeGroupReducer.actions;

export const selectCount = (state: RootState) => state.shapesGroup.arrShapes;

export default shapeGroupReducer.reducer;